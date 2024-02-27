"""Defines a module that implements a BaseModel class"""
from django.db import models
# from datetime import datetime
from django.utils import timezone
from uuid import uuid4

time = "%Y-%m-%d %H:%M:%S"


class BaseModel(models.Model):
    """Defines the BaseModel class"""
    id = models.UUIDField(primary_key=True, editable=False, unique= True, null=False)
    created_at = models.DateTimeField(default=timezone.now, null=False)
    updated_at = models.DateTimeField(default=timezone.now, null=False)
            

    class Meta:
        """ """
        abstract = True

    @classmethod
    def create(cls, *args, **kwargs):
        created_at = timezone.now()
        updated_at = timezone.now()
        new_instance = cls(created_at=created_at, updated_at=updated_at)
        if kwargs:
            for key, value in kwargs:
                setattr(new_instance, key, value)
        new_instance.id = str(uuid4())
        return new_instance

    def __str__(self):
        """String representation of the BaseModel class"""
        return f"[{self.__class__.__name__}] ({self.id}) {self.__dict__}"
    
    def __repr__(self):
        """ Returns the string representation of the object """
        return self.__str__()


