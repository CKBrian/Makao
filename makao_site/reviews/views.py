from rest_framework import viewsets, status
from .models import Review
from .serializers import ReviewSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import Http404


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    @action(detail=False, methods=['GET'], url_path='api')
    def all_routes(self, request):
        """Displays available routes for the api endpoints"""
        bk_routes = {
            'Review list': '/list/',
            'Get Review': '/review-detail/',
            'Create': '/review-create/',
            'Update': '/review-update/',
            'Delete': '/review-delete/',
        }
        return Response(bk_routes)

    @action(detail=False, methods=['GET'], url_path='list')
    def get_reviews(self, request):
        """Returns all reviews"""
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['GET'], url_path='review-detail')
    def get_review(self, request, pk=None):
        """Returns a review by id/primary key"""
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except Review.DoesNotExist:
            raise Http404

    @action(detail=False, methods=['POST', 'GET'], url_path='review-create')
    def create_review(self, request):
        """Creates a new review"""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['PUT', 'GET'], url_path='review-update')
    def update_review(self, request, pk=None):
        """Updates an existing review"""
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['DELETE', 'GET'], url_path='review-delete')
    def delete_review(self, request, pk=None):
        """Deletes an existing review"""
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

