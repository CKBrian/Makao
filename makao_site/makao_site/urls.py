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
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenBlacklistView
)
from django.http import JsonResponse

def custom404(request, exception=None):
    return JsonResponse({
        'status_code': 404,
        'error': 'The resource was not found'
    })

handler404 = custom404

urlpatterns = [
    path('admin/', admin.site.urls),
    path('v1/amenities/', include('amenities.urls')),
    path('v1/cities/', include('cities.urls')),
    path('v1/places/', include('places.urls')),
    path('v1/reviews/', include('reviews.urls')),
    path('v1/properties/', include('properties.urls')),
    path('v1/users/', include('users.urls')),
    path('v1/api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('v1/api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('v1/api/token/blacklist/', TokenBlacklistView.as_view(), name='token_blacklist')
]

