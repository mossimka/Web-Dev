from django.urls import path, re_path
from . import views
from .views import get_company_vacancies

urlpatterns = [
    path('companies/', views.get_all_companies),
    path('companies/<int:id>/', views.get_company),
    path('companies/<int:id>/vacancies/', get_company_vacancies, name='company_vacancies'),
    path('vacancies/', views.get_all_vacancies),
    path('vacancies/<int:id>/', views.get_vacancy),
    path('vacancies/top_ten/', views.get_top_vacancies),
]
