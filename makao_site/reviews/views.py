from rest_framework import viewsets, status
from .models import Review
from .serializers import ReviewsSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from django.http import Http404


class ReviewsViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewsSerializer

    @action(detail=False, methods=['GET'], url_path='api')
    def all_routes(self, request):
        """Displays available routes for the api endpoints"""
        bk_routes = {
            'Reviews list': '/list/',
            'Get Reviews': '/reviews-detail/',
            'Create': '/reviews-create/',
            'Update': '/reviews-update/',
            'Delete': '/reviews-delete/',
        }
        return Response(bk_routes)

    @action(detail=False, methods=['GET'], url_path='list')
    def get_reviews(self, request):
        """Returns all reviews"""
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['GET'], url_path='reviews-detail')
    def get_reviews(self, request, pk=None):
        """Returns a reviews by id/primary key"""
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except Review.DoesNotExist:
            raise Http404

    @action(detail=False, methods=['POST', 'GET'], url_path='reviews-create')
    def create_reviews(self, request):
        """Creates a new reviews"""
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['PUT', 'GET'], url_path='reviews-update')
    def update_reviews(self, request, pk=None):
        """Updates an existing reviews"""
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['DELETE', 'GET'], url_path='reviews-delete')
    def delete_reviews(self, request, pk=None):
        """Deletes an existing reviews"""
        instance = self.get_object()
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

