from django import forms

from .models import Product


class AddProductForm(forms.Form):
    name = forms.CharField(max_length=255, label="Название")
    description = forms.CharField(widget=forms.Textarea, label="Описание")
    price = forms.CharField(max_length=255, label="Цена")