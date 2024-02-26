"""Defines a module that implements a BaseModel class"""
from django.db import models
from datetime import datetime
from uuid import uuid4

time = "%Y-%m-%d %H:%M:%S"


class BaseModel(models.Model):
    """Defines the BaseModel class"""
    id = models.UUIDField(primary_key=True, editable=False, unique= True, null=False)
    created_at = models.DateTimeField(default=datetime.utcnow(), null=False)
    updated_at = models.DateTimeField(default=datetime.utcnow(), null=False)

    def __init__(self, *args, **kwargs):
        """Initializes a class"""
        if kwargs:
            for key, value in kwargs.items():
                if key == 'created_at' or key == 'updated_at':
                    setattr(self, key, datetime.strptime(value, "%Y-%m-%d %H:%M:%S"))
                elif key != "__class__":
                    setattr(self, key, value)
                
            if kwargs.get("id", None) is None:
                self.id = str(uuid4())
        else:
            self.id = str(uuid4())
            self.created_at = datetime.utcnow()
            

    class Meta:
        """ """
        abstract = True

    def __str__(self):
        """String representation of the BaseModel class"""
        return f"[{self.__class__.__name__}] ({self.id}) {self.__dict__}"
    
    def __repr__(self):
        """ Returns the string representation of the object """
        return self.__str__()

    def to_dict(self, F_st=False):
        """ Function that returns the dictionary represantation of the object """
        new_dict = self.__dict__.copy()

        if "created_at" in new_dict:
            new_dict["created_at"] = new_dict["created_at"].strftime(time)
        if "updated_at" in new_dict:
            new_dict["updated_at"] = new_dict["updated_at"].strftime(time)
        if "_sa_instance_state" in new_dict:
            del new_dict["_sa_instance_state"]
        new_dict["__class__"] = self.__class__.__name__
        return new_dict

