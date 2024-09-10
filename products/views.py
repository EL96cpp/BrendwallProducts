from django.shortcuts import render

from .models import Product


def product_add(request):
    print("product add")


def products_list(request):
    products = Product.objects.all()
    return render(request, 'index.html', {"products": products})