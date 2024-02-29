from rest_framework import viewsets, status
from .models import City
from .serializers import CitySerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import Http404


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer

    @action(detail=False, methods=['GET'], url_path='api')
    def all_routes(self, request):
        bk_routes = {
            'City list': '/list/',
            'Get City': '/city-detail/',
            'Create': '/city-create/',
            'Update': '/city-update/',
            'Delete': '/city-delete/',
        }
        return Response(bk_routes)

    @action(detail=False, methods=['GET'], url_path='list')
    def get_cities(self, request):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['GET'], url_path='city-detail')
    def get_city(self, request, pk=None):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except City.DoesNotExist:
            raise Http404

    @action(detail=False, methods=['POST', 'GET'], url_path='city-create')
    def create_city(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['PUT', 'GET'], url_path='city-update')
    def update_city(self, request, pk=None):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['DELETE', 'GET'], url_path='city-delete')
    def delete_city(self, request, pk=None):
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

