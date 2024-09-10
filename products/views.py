from django.shortcuts import render

from .models import Product
from .forms import AddProductForm


def product_add(request):
    print("product add")


def products_list(request):
    products = Product.objects.all()
    form = AddProductForm()
    return render(request, 'index.html', {"form": form, "products": products})