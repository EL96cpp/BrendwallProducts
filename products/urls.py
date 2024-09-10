from django.urls import path, re_path
from .views import *

app_name = 'products'

urlpatterns = [
    path('product/', product_add, name='product_add'),
    path('', products_list, name='products_list'),
]