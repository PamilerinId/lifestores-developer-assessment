from django.db import models

# Create your models here.



class Product(models.Model):
    sku = models.CharField(max_length=250)
    name = models.CharField(max_length=250)
    description = models.TextField()
    price = models.DecimalField(decimal_places=2, max_digits=15)
    image = models.ImageField(max_length=250, upload_to='products/')

    # Audit logs
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    def __str__(self):
        return self.name
    