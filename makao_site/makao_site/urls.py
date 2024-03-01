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
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('admin/', admin.site.urls),
    path('v1/amenities/', include('amenities.urls')),
    path('v1/cities/', include('cities.urls')),
    path('v1/places/', include('places.urls')),
    path('v1/reviews/', include('reviews.urls')),
    path('v1/properties/', include('properties.urls'))
]

