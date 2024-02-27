from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin


class UserAdminConfig(UserAdmin):

    search_fields = ('email', 'first_name', 'last_name',)
    list_filter = ('email', 'first_name', 'last_name', 'is_staff',
                    'is_active', 'is_superuser')
    ordering = ('-created_at',)
    list_display = ('email', 'first_name', 'last_name',
                    'is_active', 'is_staff',
                    )

    fieldsets = (
        ('Personal', {'fields': ('email', 'first_name', 'last_name', 'password')}),
        ('Contacts', {'fields': ('phone_number',)}),
        ('Permissions', {'fields': ('is_staff', 'is_superuser', 'is_active')}),
        ('More Details', {'fields': ('created_at', 'updated_at')}),
    )

    add_fieldsets = (
    (None, {
        'classes': ('wide',),
        'fields': ('email', 'first_name', 'last_name', 'phone_number', 'password1', 'password2', 'is_active', 'is_staff'),
    }),
)



admin.site.register(User, UserAdminConfig)
