from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from amenities.views import AmenityViewSet

router = routers.DefaultRouter()
router.register(r'amenities', AmenityViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]
