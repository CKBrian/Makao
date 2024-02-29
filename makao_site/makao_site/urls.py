"""from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from amenities.views import AmenityViewSet

router = routers.DefaultRouter()
router.register(r'amenities', AmenityViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]"""

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from amenities.views import AmenityViewSet
from cities.views import CityViewSet

# Router for 'amenities' app
amenities_router = routers.DefaultRouter()
amenities_router.register(r'amenities', AmenityViewSet, basename='amenity')

# Router for 'cities' app (assuming it also uses DefaultRouter)
cities_router = routers.DefaultRouter()
cities_router.register(r'cities', CityViewSet, basename='city')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(amenities_router.urls)),
    path('', include(cities_router.urls)),
]

