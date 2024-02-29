from rest_framework import serializers
from .models import Property


class PropertySerializer(serializers.ModelSerializer):
    """Serializes the Property table from the database"""
    class Meta:
        model = Property
        fields = '__all__'
