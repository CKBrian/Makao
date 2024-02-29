from rest_framework import serializers
from .models import Place


class PlaceSerializer(serializers.ModelSerializer):
    """Serializes the Place table from the database"""
    class Meta:
        model = Place
        fields = '__all__'
