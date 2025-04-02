from rest_framework import serializers

from api.models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'city', 'address')

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company')

class CompanySerializerSimple(serializers.Serializer):
    id = serializers.IntegerFiled()
    name = serializers.CharField()
    description = serializers.TextField()
    city = serializers.CharFied()
    address = serializers.TextField()