# models.py
from django.db import models
from django.utils.translation import gettext_lazy
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from base_model.models import BaseModel
from django.contrib.auth.hashers import make_password

class CustomAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password, **other_fields):
        other_fields.setdefault('is_active', True)

        if not email:
            raise ValueError(gettext_lazy("Please provide an email address"))

        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, first_name, last_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('SuperUser must be assigned to is_staff=True')

        if other_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must be assigned to is_superuser=True')

        user = self.create_user(email, first_name, last_name, password, **other_fields)
        return user


class User(BaseModel, AbstractBaseUser, PermissionsMixin):
    """ Class that defines the Custom User object and inherits from BaseModel """
    email = models.EmailField(gettext_lazy('email address'), unique=True)
    first_name = models.CharField(default="", max_length=250, blank=True)
    last_name = models.CharField(default="", max_length=250)
    phone_number = models.IntegerField(unique=True)
    address = models.CharField(default="", max_length=250)


    objects = CustomAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
