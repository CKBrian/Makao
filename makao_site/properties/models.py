from django.db import models
from base_model.models import BaseModel
from users.models import User
from amenities.models import Amenity
from places.models import Place



class Property(BaseModel):
    """ Property class that represents all Property objects """
    name = models.CharField(max_length=255, null=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    property_type = models.CharField(max_length=255, default='')
    description = models.TextField(null=True)
    number_rooms = models.IntegerField(null=False, default=0)
    rent_price = models.IntegerField(null=False, default=0)
    location = models.CharField(max_length=255, default='')
    place_id = models.ForeignKey(Place, on_delete=models.CASCADE)
    amenities = models.ManyToManyField(Amenity, related_name="property_amenities", through="PropertyAmenity")


class PropertyAmenity(BaseModel):
    """ Class that represents all Amenity objects associated with a Property """
    property_id = models.ForeignKey(Property, on_delete=models.CASCADE)
    amenity_id = models.ForeignKey(Amenity, on_delete=models.CASCADE)


class PlaceProperty(BaseModel):
    """ Class that represents all Property objects related to a single place """
    place_id = models.ForeignKey(Place, on_delete=models.CASCADE)
    property_id = models.ForeignKey(Property, on_delete=models.CASCADE)
    