from rest_framework import viewsets, status
from .models import Amenity
from .serializers import AmenitySerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import Http404


class AmenityViewSet(viewsets.ModelViewSet):
    queryset = Amenity.objects.all()
    serializer_class = AmenitySerializer

    @action(detail=False, methods=['GET'], url_path='api')
    def all_routes(self, request):
        """Displays available routes for the api endpoints"""
        bk_routes = {
            'Amenity list': '/list/',
            'Get Amenity': '/amenity-detail/',
            'Create': '/amenity-create/',
            'Update': '/amenity-update/',
            'Delete': '/amenity-delete/',
        }
        return Response(bk_routes)

    @action(detail=False, methods=['GET'], url_path='list')
    def get_amenities(self, request):
        """Returns all amenities"""
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['GET'], url_path='amenity-detail')
    def get_amenity(self, request, pk=None):
        """Returns a amenity by id/primary key"""
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except Amenity.DoesNotExist:
            raise Http404

    @action(detail=False, methods=['POST', 'GET'], url_path='amenity-create')
    def create_amenity(self, request):
        """Creates a new amenity"""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['PUT', 'GET'], url_path='amenity-update')
    def update_amenity(self, request, pk=None):
        """Updates an existing amenity"""
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['DELETE', 'GET'], url_path='amenity-delete')
    def delete_amenity(self, request, pk=None):
        """Deletes an existing amenity"""
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

