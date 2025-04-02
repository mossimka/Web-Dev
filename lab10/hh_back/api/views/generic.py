from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


class CompanyListAPIView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_url_kwarg = 'id'


class VacancyListAPIView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.get.objects.all()
    serializer_class = VacancySerializer
    lookup_utl_kwarg = 'id'

class VacanciesTopTenAPIView()