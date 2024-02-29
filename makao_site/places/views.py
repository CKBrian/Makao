from rest_framework import viewsets, status
from .models import Place
from .serializers import PlaceSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import Http404


class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer

    @action(detail=False, methods=['GET'], url_path='api')
    def all_routes(self, request):
        """Displays available routes for the api endpoints"""
        bk_routes = {
            'Place list': '/list/',
            'Get Place': '/place-detail/',
            'Create': '/place-create/',
            'Update': '/place-update/',
            'Delete': '/place-delete/',
        }
        return Response(bk_routes)

    @action(detail=False, methods=['GET'], url_path='list')
    def get_places(self, request):
        """Returns all places"""
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['GET'], url_path='place-detail')
    def get_place(self, request, pk=None):
        """Returns a place by id/primary key"""
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except Place.DoesNotExist:
            raise Http404

    @action(detail=False, methods=['POST', 'GET'], url_path='place-create')
    def create_place(self, request):
        """Creates a new place"""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['PUT', 'GET'], url_path='place-update')
    def update_place(self, request, pk=None):
        """Updates an existing place"""
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['DELETE', 'GET'], url_path='place-delete')
    def delete_place(self, request, pk=None):
        """Deletes an existing place"""
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

