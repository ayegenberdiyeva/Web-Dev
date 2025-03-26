from django.urls import path
from django.urls.conf import re_path

from .views import *


urlpatterns = [
    path('api/products/', productsList),
    path('api/products/<int:id>/', getProduct),
    path('api/categories/', categoriesList),
    path('api/categories/<int:id>/', getCategory),
    path('api/categories/<int:id>/products/', getProductsByCategory)
]