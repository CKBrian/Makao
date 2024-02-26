"""Defines a module that implements a BaseModel class"""
from django.db import models
import uuid


class BaseModel(models.Model):
    """Defines the BaseModel class"""
    id = str(uuid.uuid4())
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        """"""
        abstract = True

    def __str__(self):
        """String representation of the BaseModel class"""
        return "[{:s}] ({:s}) {}".format(self.__class__.__name__, self.id,
                                         self.__dict__)
