from django.db import models
from base_model.models import BaseModel
# from cities.models import City
from properties.models import Property


class Place(BaseModel):
    """ Place class to represent all Place objects """
    # city_id = models.ForeignKey(City, on_delete=models.CASCADE, null=False)
    name = models.CharField(max_length=255, null=False)
    properties = models.ManyToOneRel(Property, on_delete=models.CASCADE, to="PlaceProperty")

class PlaceProperty(BaseModel):
    """ Class that represents all Property objects related to a single place """
    place_id = models.ForeignKey(Place, on_delete=models.CASCADE)
    property_id = models.ForeignKey(Property, on_delete=models.CASCADE)
    