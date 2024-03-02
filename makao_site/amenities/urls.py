from django.urls import path, include
from .views import AmenityViewSet, DeletUpdateAmenityView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', AmenityViewSet, basename='amenities')


urlpatterns = [
    path('', include(router.urls)),
    path('amenities/<str:pk>', DeletUpdateAmenityView.as_view(), name="amenity")
]
