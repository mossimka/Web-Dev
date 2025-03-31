import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Company
from .serializers import CompanySerializer


# Create your views here.
@csrf_exempt
def get_all_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)



def get_company():
    return None


def get_company_vacancies():
    return None


def get_all_categories():
    return None


def get_category():
    return None


def get_category_products():
    return None