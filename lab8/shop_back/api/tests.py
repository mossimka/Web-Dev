from django.test import TestCase

from shop_back.api.models import Product


# Create your tests here.
def get_all_products(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe="False")