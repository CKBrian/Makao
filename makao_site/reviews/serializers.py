from rest_framework import serializers
from .models import Review


class ReviewsSerializer(serializers.ModelSerializer):
    """Serializes the Review table from the database"""
    class Meta:
        model = Review
        fields = '__all__'
