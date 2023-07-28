from .models import UserDetails, Skill
from rest_framework import serializers

class UserDetailsSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserDetails
    fields = "__all__"

class SkillSerializer(serializers.ModelSerializer):
  class Meta:
    model = Skill
    fields = "__all__"