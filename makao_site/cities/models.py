from django.db import models
from base_model.models import BaseModel
from places.models import Place


class City(BaseModel):
    """ City class that represents all City objects """
    name = models.CharField(max_length=255)
    places = models.ManyToOneRel(Place, field_name="city_places", on_delete=models.CASCADE, to="CityPlace")

class CityPlace(BaseModel):
    """ Class that represents relationship between City and Place objects """
    city_id = models.ForeignKey(City, on_delete=models.CASCADE)
    place_id = models.ForeignKey(Place, on_delete=models.CASCADE)

