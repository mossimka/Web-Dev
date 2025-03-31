from django.urls import path, re_path
from . import views

urlpatterns = [
    path('companies/', views.get_all_companies),
    path('companies/<int:id>/', views.get_company),
    path('companies/<int:id>/vacancies/', views.get_company_vacancies),
    path('vacancies', views.get_all_categories),
    path('vacancies/<int:id>/', views.get_category),
    path('vacancies/top_ten/', views.get_category_products),
]
