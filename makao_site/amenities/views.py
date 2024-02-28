from rest_framework import viewsets
from .serializers import AmenitySerializer, Amenity


class AmenityViewSet(viewsets.ModelViewSet):
    queryset = Amenity.objects.all()
    serializer_class = AmenitySerializer