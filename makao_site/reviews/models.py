from django.db import models
from base_model.models import BaseModel
from users.models import User
from properties.models import Property


class Review(BaseModel):
    """ Class that represents all Review objects """
    text = models.TextField(null=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    property_id = models.ForeignKey(Property, on_delete=models.CASCADE)
    rating = models.DecimalField(null=False, default=0.0, decimal_places=1, max_digits=2)


class PropertyReview(BaseModel):
    """ class that represent all Review objects associated with their Properties """
    property_id = models.ForeignKey(Property, on_delete=models.CASCADE, null=False)
    review_id = models.ForeignKey(Review, on_delete=models.CASCADE, null=False)

