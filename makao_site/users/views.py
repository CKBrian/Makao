from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.middleware import csrf
from django.contrib.auth.hashers import make_password
from django.conf import settings
from .models import User
from .serializers import UserSerializer

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
        Authenticate a user, generate JWT tokens, and set an HTTP-only cookie.
        """
        data = request.data
        response = Response()

        email = data.get('email', None)
        password = data.get('password', None)

        if email is None or password is None:
            return Response({"error": "Both email and password are required."}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(email=email, password=password)

        if user is not None:
            if user.is_active:
                data = get_tokens_for_user(user)
                response.set_cookie(
                    key=settings.SIMPLE_JWT['AUTH_COOKIE'],
                    value=data["access"],
                    expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
                    secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                    httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                    samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
                )
                csrf.get_token(request)

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
