from base_model.models import BaseModel
from django.db import models


class Amenity(BaseModel):
    name = models.CharField(max_length=255, null=False, unique=True)