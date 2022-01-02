from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    ROLES=(
        ('Admin','Admin'),
        ('Docter','Docter'),
        ('Nurse','Nurse')
    )
    role = models.CharField(max_length=10,choices=ROLES)
