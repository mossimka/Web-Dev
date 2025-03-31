from django.contrib import admin

from .models import Company, Vacancy


# Register your models here.
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "city")
    search_fields = ("id", "name", "city")

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "company", "salary")
    search_fields = ("id", "name", "company", "salary")