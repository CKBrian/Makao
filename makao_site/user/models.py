"""Implements a user module"""
from django.db import models
from base_model.models import BaseModel


class User(BaseModel, models.Model):
    """Defines a User class that inheritf from BaseModel"""
    name = models.CharField("User", max_length=200)

    def __init__(self, *args, **kwargs):
        """Initializes a User class"""
        super(User, self).__init__(*args, **kwargs)
