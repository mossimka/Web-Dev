from django.urls import path, re_path
from . import views

urlpatterns = [
    path('products/', views.get_all_products),
    path('products/<int:dest_id>/', views.get_product),
    path('categories/', views.get_all_categories),
    path('categories/<int:dest_id>', views.get_category),
    path('categories/<int:dest_id>/products', views.get_category_products),
]