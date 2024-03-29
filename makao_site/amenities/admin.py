from django.contrib import admin
from .models import Amenity


class AmenityAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_filter = ('id', 'name')


admin.site.register(Amenity, AmenityAdmin)