"""Defines a module that implements a BaseModel class"""
from django.db import models
from datetime import datetime
import uuid


class BaseModel(models.Model):
    """Defines the BaseModel class"""

    def __init__(self, *args, **kwargs):
        """Defines an init class"""
        if kwargs:
            for key, value in kwargs.items():
                if key != "__class__":
                    setattr(self, key, value)
            if kwargs.get("created_at", None) and type(self.created_at) is str:
                self.created_at = datetime.strptime(kwargs["created_at"], "%Y-%m-%d %H-%M-%S")
            else:
                self.created_at = datetime.utcnow()
            if kwargs.get("updated_at", None) and type(self.updated_at) is str:
                self.updated_at = datetime.strptime(kwargs["updated_at"], "%Y-%m-%d %H-%M-%S")
            else:
                self.updated_at = datetime.utcnow()
            if kwargs.get("id", None) is None:
                self.id = str(uuid.uuid4())
        else:
            id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
            created_at = models.DateTimeField(auto_now_add=True)
            updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        """"""
        abstract = True

    def __str__(self):
        """String representation of the BaseModel class"""
        if not self.id:
            return None
        return self.id
        # return "[{:s}] ({:s}) {}".format(self.__class__.__name__, str(self.id), self.__dict__)

    def to_dict(self):
        """"""
        pass

