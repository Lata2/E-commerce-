from rest_framework import serializers
from .models import *

class ChromaProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model=ChromaProducts
        fields='__all__'
class ChromaProductsCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=ChromaProductsCategory
        fields='__all__'
class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Location
        fields='__all__'
        
