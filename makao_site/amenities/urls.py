from django.urls import path
from .views import AmenityViewSet


urlpatterns = [
    path('/', AmenityViewSet, name="all_amenities")
]
