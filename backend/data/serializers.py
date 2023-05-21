from rest_framework import serializers
from .models import *

from rest_framework import serializers

class InformationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Information
        fields = '__all__'

class InjuriesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Injuries
        fields = '__all__'

class StatsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stats
        fields = '__all__'
        
class PlayerSerializer(serializers.ModelSerializer):
    info = InformationSerializer(many=True, read_only=True)
    stats = StatsSerializer(many=True, read_only=True)
    injuries = InjuriesSerializer(many=True, read_only=True)

    class Meta:
        model = Player
        fields = '__all__'
        
