from rest_framework import generics

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


class CompaniesListAPIView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_url_kwarg = 'id'

class CompanyVacanciesAPIView(generics.ListCreateAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        try:
            company = Company.objects.get(pk=company_id)
            return company.vacancies.all()
        except Company.DoesNotExist:
            return Vacancy.objects.none()

class VacanciesListAPIView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_utl_kwarg = 'id'

class TopVacanciesAPIView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]