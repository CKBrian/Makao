from django.db import models
from base_model.models import BaseModel
from users.models import User
from properties.models import Property


class Review(BaseModel):
    """ Revier class that represents all Property reviews """
    text = models.CharField(max_length=1024, null=False)
	property_id = models.ForeignKey(Property, on_delete=models.CASCADE)
	user_id = models.ForeignKey(User, on_delete=models.CASCADE)
