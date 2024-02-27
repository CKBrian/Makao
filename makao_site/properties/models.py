from django.db import models
from base_model.models import BaseModel
from users.models import User
from amenities.models import Amenity


class Property(BaseModel):
    """ Property class that represents all Property objects """
    name = models.CharField(max_length=255, null=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    description = models.TextField(null=True)
    number_rooms = models.IntegerField(null=False, default=0)
    number_bathrooms = models.IntegerField(null=False, default=0)
    rent_price = models.IntegerField(null=False, default=0)
    latitude = models.DecimalField(null=True, default=0.0)
    longitude = models.DecimalField(null=True, default=0.0)
    # reviews = models.ManyToManyField(Review, related_name="Property_reviews", through="PropertyReview")
    # place_id = models.ForeignKey(Place, on_delete=models.CASCADE)
    amenities = models.ManyToManyField(Amenity, related_name="property_amenities", through="PropertyAmenity")


class PropertyReview(BaseModel):
    """ class that represent all Review objects associated with their Properties """
    property_id = models.ForeignKey(Property, on_delete=models.CASCADE, null=False)
    # review_id = models.ForeignKey(Review, on_delete=models.CASCADE, null=False)


class PropertyAmenity(BaseModel):
    """ Class that represents all Amenity objects associated with a Property """
    property_id = models.ForeignKey(Property, on_delete=models.CASCADE)
    amenity_id = models.ForeignKey(Amenity, on_delete=models.CASCADE)
