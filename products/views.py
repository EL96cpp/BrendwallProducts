from django.shortcuts import render

from .models import Product
from .forms import AddProductForm


def product_add(request):
    print("product add")
    product_name = request.POST.get("product_name")
    product_description = request.POST.get("product_description")
    product_price = request.POST.get("product_price")
    print(product_name, product_description, product_price)


def products_list(request):
    products = Product.objects.all()
    form = AddProductForm()
    return render(request, 'index.html', {"form": form, "products": products})