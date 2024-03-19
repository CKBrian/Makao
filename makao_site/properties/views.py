from rest_framework import viewsets, status
from .models import Property
from .serializers import PropertySerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import Http404


class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer

    @action(detail=False, methods=['GET'], url_path='api')
    def all_routes(self, request):
        """Displays available routes for the api endpoints"""
        bk_routes = {
            'Property list': '/list/',
            'Get Property': '/property-detail/',
            'Create': '/property-create/',
            'Update': '/property-update/',
            'Delete': '/property-delete/',
            'Search Properties': '/search/'
        }
        return Response(bk_routes)

    @action(detail=False, methods=['GET'], url_path='list')
    def get_properties(self, request):
        """Returns all properties"""
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['GET'], url_path='property-detail')
    def get_property(self, request, pk=None):
        """Returns a property by id/primary key"""
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except Property.DoesNotExist:
            raise Http404

    @action(detail=False, methods=['POST', 'GET'], url_path='property-create')
    def create_property(self, request):
        """Creates a new property"""
        serializer = self.get_serializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['PUT', 'GET'], url_path='property-update')
    def update_property(self, request, pk=None):
        """Updates an existing property"""
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['DELETE', 'GET'], url_path='property-delete')
    def delete_property(self, request, pk=None):
        """Deletes an existing property"""
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=['GET'], url_path='search')
    def search_properties(self, request):
        """Searches properties based on search criteria"""
        query_params = request.query_params
        search_query = query_params.get('query', '')
        if search_query:
            search_results = self.handle_search(search_query)
            serializer = self.get_serializer(search_results, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({}, status=status.HTTP_200_OK)
        
    def handle_search(self, query):
        """Perform search operation based on the query"""
        return Property.objects.filter(name__icontains=query)

