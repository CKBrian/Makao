from rest_framework import viewsets, status, generics, authentication, permissions
from rest_framework.views import APIView
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from django.contrib.auth import authenticate
from django.middleware import csrf
from django.contrib.auth.hashers import make_password
from django.conf import settings
from .models import User
from .serializers import UserSerializer
from .models import User
from .serializers import CustomLoginSerializer, UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.permissions import IsAuthenticated

User = get_user_model()

class CreateUserView(generics.CreateAPIView):
    """Create a new user in the system"""
    serializer_class = UserSerializer

class CustomTokenObtainPairView(APIView):
    """Custom view to obtain an access token and refresh token"""
    serializer_class = CustomLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data  # No need to access 'user' key
        refresh = RefreshToken.for_user(user)
        response = Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_200_OK)
        response['Authorization'] = f'Bearer {refresh.access_token}'
        return response
    
class BlacklistTokenUpdateView(APIView):
    permission_classes = [permissions.AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
    
class ManageUserView(generics.RetrieveUpdateAPIView):
    """Manage the authenticated user"""
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    def get_object(self):
        """Retrieve and return the authenticated user"""
        return self.request.user
    
class ListUsers(APIView):
    """
    View to list all users in the system.
    * Requires token authentication.
    * Only admin users are able to access this view.
    """
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]
    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        users = User.objects.all()
        usernames = [user.email for user in users]
        return Response(usernames)


class GetUserDetails(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user  # Get the authenticated user
        serialized_user = UserSerializer(user)  # Replace with your user serializer
        return Response(serialized_user.data, status=status.HTTP_200_OK)

def get_tokens_for_user(user):
    """
    Helper function to generate JWT tokens for a given user.
    """
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoints for user-related operations.
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['GET'], url_path='api')
    def all_routes(self, request):
        """
        Display available routes for the user-related API endpoints.
        """
        usr_routes = {
            'Login User': '/login/',
            'Create': '/register/',
            'Update': '/update-user/',
            'Delete': '/delete-user/',
            'Check Authentication status for User': '/check-auth/',
            'Logout': '/logout'
        }
        return Response(usr_routes)

    @action(detail=False, methods=['POST'], url_path='register')
    def register_user(self, request):
        """
        Create a new user and return the serialized user data.
        """
        data = request.data
        data['password'] = make_password(data.get('password'))  # Hash the password

        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            user_data = UserSerializer(user).data
            return Response(user_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['POST'], url_path='login')
    def login_user(self, request):
        """
        Authenticate a user, generate JWT tokens, and return them along with the user ID.
        """
        data = request.data
        response = Response()

        email = data.get('email', None)
        password = data.get('password', None)

        if not email or not password:
            return Response({"error": "Both email and password are required."}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(email=email, password=password)

        if user:
            if user.is_active:
                access_token = AccessToken.for_user(user)
                refresh_token = RefreshToken.for_user(user)

                data = {
                    'user_id': user.id,
                    'access_token': str(access_token),
                    'refresh_token': str(refresh_token),
                }

                response.set_cookie(
                    key=settings.SIMPLE_JWT['AUTH_COOKIE'],
                    value=str(access_token),
                    expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
                    secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                    httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                    samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
                )

                response.data = {"Success": "Login successfully", "data": data}
                return response
            else:
                return Response({"No active": "This account is not active!!"}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response({"Invalid": "Invalid email or password!!"}, status=status.HTTP_401_UNAUTHORIZED)
        
    @action(detail=False, methods=['PUT'], url_path='update-user', permission_classes=[IsAuthenticated])
    def update_user(self, request):
        """
        Update the user's information and return the new serialized user data.
        """
        user = self.request.user
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            updated_user = serializer.save()
            updated_user_data = UserSerializer(updated_user).data
            return Response(updated_user_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['POST'], url_path='delete-user', permission_classes=[IsAuthenticated])
    def delete_user(self, request):
        """
        Delete the user from the database and invalidate associated cookies.
        """
        user = self.request.user
        user.delete()

        # Invalidate cookies associated with the user
        response = Response({'detail': 'User deleted successfully'}, status=status.HTTP_200_OK)
        response.delete_cookie(settings.SIMPLE_JWT['AUTH_COOKIE'])
        return response

    @action(detail=False, methods=['GET'], url_path='check-auth', permission_classes=[IsAuthenticated])
    def check_authentication(self, request):
        """
        Check if the user is authenticated.
        """
        user = request.user
        return Response({'detail': f'User {user.username} is authenticated.'}, status=status.HTTP_200_OK)
    
    @action(detail=False, methods=['POST'], url_path='logout')
    def logout_user(self, request):
        """
        Logout the user and invalidate associated cookies.
        """
        response = Response({'detail': 'User logged out successfully'}, status=status.HTTP_200_OK)
        response.delete_cookie(settings.SIMPLE_JWT['AUTH_COOKIE'])
        return response
