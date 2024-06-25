from django.db import models
from utils.models import CustomModel

class Product(CustomModel):
    product_code = models.CharField("Código", max_length=500, blank=True, null=True)
    name = models.CharField("Nombre", max_length=500, blank=True, null=True)
    brand = models.CharField("Marca", max_length=500, blank=True, null=True)
    hardware_code = models.CharField("Codigo Ferretería", max_length=500, blank=True, null=True)
    price = models.IntegerField('Precio', default=0, blank=True, null=True)
    imageUrl = models.CharField("Imagen", max_length=500, blank=True, null=True)

    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.id:
            print("Warning: Product " + str(self.id) + " updated with save method")

        super(Product, self).save(*args, **kwargs)