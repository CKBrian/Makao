from django.db import models
from base_model.models import BaseModel
from cities.models import City


class Place(BaseModel):
    """ Place class to represent all Place objects """
    city_id = models.ForeignKey(City, on_delete=models.CASCADE, null=False)
    name = models.CharField(max_length=255, null=False)
