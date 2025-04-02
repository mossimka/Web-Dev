from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Product, Category
from api.serializers import ProductSerializer

