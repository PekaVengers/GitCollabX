from django.db import models

# Create your models here.
class UserDetails(models.Model):
  username = models.CharField(max_length=200)
  email = models.EmailField()
  name = models.CharField(max_length=200)
  profile = models.TextField()

  def __str__(self):
    return self.name

class Skill(models.Model):
  name = models.CharField(max_length=100, unique=True)
  users = models.ManyToManyField(UserDetails, null=True, blank=True)

  def __str__(self):
      return self.name