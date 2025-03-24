from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404

from .models import Product, Category


# Create your views here.
def get_all_products(request):
    products =  Product.objects.all()
    products_json = [p.to_json() for p  in products]
    return JsonResponse(products_json, safe=False)

def get_product(request, dest_id):
    product = get_object_or_404(Product, id=dest_id)
    return JsonResponse(product.to_json())

def get_all_categories(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def get_category(request, dest_id):
    category = get_object_or_404(Category, id=dest_id)
    return JsonResponse(category.to_json())

def get_category_products(request, dest_id):
    category = get_object_or_404(Category, id=dest_id)
    products = category.products.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
