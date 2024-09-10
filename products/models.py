from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False, verbose_name="Название")
    description = models.TextField(null=False, blank=False, verbose_name="Описание")
    price = models.PositiveIntegerField(null=False, blank=False, verbose_name="Цена")

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"