from django.shortcuts import render
from django.http import JsonResponse
from django.template.loader import render_to_string

from .models import Product
from .forms import AddProductForm


def product_add(request):
    product_name = request.POST.get("product_name")
    product_description = request.POST.get("product_description")
    product_price = request.POST.get("product_price")
    print(product_name, product_description, product_price)
    if not product_name or not product_description or not product_price:
        return JsonResponse({'message': 'Заполните все необходимые поля!'}, status=400)
    if not product_price.isdigit():
        return JsonResponse({'message': 'Цена должна быть целым числом!'}, status=400)
    if int(product_price) <= 0:
        return JsonResponse({'message': 'Цена должна быть целым числом больше 0!'}, status=400)
    Product.objects.create(name=product_name, description=product_description, price=int(product_price))
    products = Product.objects.all()
    products_html = render_to_string("includes/products.html", {"products": products}, request=request)
    return JsonResponse({'message': 'Товар успешно добавлен!', 
                         'products_html': products_html}, status=200)


def products_list(request):
    products = Product.objects.all()
    form = AddProductForm()
    return render(request, 'index.html', {"form": form, "products": products})