from rest_framework import serializers
from .models import City


class CitySerializer(serializers.ModelSerializer):
    """Serializes the City table from the database"""
    class Meta:
        model = City
        fields = '__all__'
