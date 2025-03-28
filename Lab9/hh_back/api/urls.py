from django.urls import path
from .views import (
    company_list,
    company_detail,
    company_vacancy,
    vacancy_list,
    vacancy_detail,
    top_ten_vacancies,
)

urlpatterns = [
    path('companies/', company_list, name='company_list'),
    path('companies/<int:id>/', company_detail, name='company_detail'),
    path('companies/<int:id>/vacancies/', company_vacancy, name='company_vacancy'),
    path('vacancies/', vacancy_list, name='vacancy_list'),
    path('vacancies/<int:id>/', vacancy_detail, name='vacancy_detail'),
    path('vacancies/top_ten/', top_ten_vacancies, name='top_ten_vacancies'),
]