from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category

def productsList(request):
    products = Product.objects.values()
    return JsonResponse(list(products), safe=False)

def getProduct(request, id):
    product = get_object_or_404(Product, id=id)
    return JsonResponse(product.to_json(), safe=False)

def categoriesList(request):
    categories = Category.objects.values()
    return JsonResponse(list(categories), safe=False)

def getCategory(request, id):
    category = get_object_or_404(Category, id=id)
    return JsonResponse(category.to_json(), safe=False)

def getProductsByCategory(request, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(category=category).values()
    return JsonResponse(list(products), safe=False)