"""Defines a module that implements a BaseModel class"""
from django.db import models


class BaseModel(models.Model):
    """Defines the BaseModel class"""
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        """"""
        abstract = True
