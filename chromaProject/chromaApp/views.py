# from django.shortcuts import render

# from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
from .models import *
from rest_framework.decorators import api_view
from .Serializers import *
from rest_framework.response import Response
from rest_framework import status
from .Serializers import *
# Create your views here.


@api_view(['POST'])
def PostchromaProductView(request):
    serializers=ChromaProductsSerializer(data=request.data)
    if serializers.is_valid():
        serializers.save()
        return Response({'success': 'Successfully created Product'}, status=201)
    else:
        return Response(serializers.errors, status=400)
        
# @api_view(['GET'])
# def GetchromaProductView(request):
#     catName = request.get('categoryName')
#     if catName:
#         chroma_products = ChromaProducts.objects.filter(categoryName=catName)
#         serializer = ChromaProductsSerializer(chroma_products.products, many=True)
#         return Response(serializer.data)
      
#     return Response({'error': 'Category not found'}, status=404)
import pdb
@api_view(['GET'])
def GetchromaProductView(request):
        Products = ChromaProducts.objects.all()
        serializer = ChromaProductsSerializer(Products, many=True)
        return Response(serializer.data)



@api_view(['POST'])
def LocationView(request):
    # pdb.set_trace()
    serializers=LocationSerializer(data=request.data)
    if serializers.is_valid():
        serializers.save()
        return Response({'success': 'Successfully created Product'}, status=201)
    else:
        return Response(serializers.errors, status=400)      

@api_view(['GET'])
def GetLocationView(request):
        location = Location.objects.all()
        serializer = LocationSerializer(location, many=True)
        return Response(serializer.data)

# @api_view(['PUT'])

# def PutLocationView(request,pk=None):
#     pdb.set_trace()

#     if pk:
#         location = Location.objects.get(pk=pk)
#         serializer = LocationSerializer(location, data=request.data)
#         if serializer.is_valid():
#              serializer.save()
#              return Response({'success': 'Successfully updated Location'}, status=200)
#     else:
#         location = Location.objects.all()
#         serializer = LocationSerializer(location, many=True)
#         return Response(serializer.data)

 