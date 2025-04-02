from django.urls import path
from . import views

#generic
urlpatterns = [
    path('companies/', views.CompaniesListAPIView.as_view()),
    path('companies/<int:id>/', views.CompanyDetailAPIView.as_view()),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesAPIView.as_view(), name='company_vacancies'),
    path('vacancies/', views.CompaniesListAPIView.as_view()),
    path('vacancies/<int:id>/', views.CompanyDetailAPIView.as_view()),
    path('vacancies/top_ten/', views.TopVacanciesAPIView.as_view()),
]

''' cbv
urlpatterns = [
    path('companies/', views.CompaniesListAPIView.as_view()),
    path('companies/<int:id>/', views.CompanyDetailAPIView.as_view()),
    path('companies/<int:id>/vacancies/', views.CompanyVacanciesAPIView.as_view(), name='company_vacancies'),
    path('vacancies/', views.CompaniesListAPIView.as_view()),
    path('vacancies/<int:id>/', views.CompanyDetailAPIView.as_view()),
    path('vacancies/top_ten/', views.TopVacanciesAPIView.as_view()),
]
'''

'''fbv
urlpatterns = [
    path('companies/', views.get_all_companies),
    path('companies/<int:id>/', views.get_company),
    path('companies/<int:id>/vacancies/', views.get_company_vacancies, name='company_vacancies'),
    path('vacancies/', views.get_all_vacancies),
    path('vacancies/<int:id>/', views.get_vacancy),
    path('vacancies/top_ten/', views.get_top_vacancies),
]
'''
