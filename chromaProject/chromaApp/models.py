from django.db import models

# Create your models here.
class ChromaProductsCategory(models.Model):
        categoryName=models.CharField(max_length=100 )
        def __str__(self):
                return self.categoryName
           

class ChromaProducts(models.Model):
        category = models.ForeignKey(ChromaProductsCategory, on_delete=models.CASCADE, related_name='products')
        image=models.ImageField(upload_to='uploads/')
        name=models.CharField(max_length=100)
        prize=models.FloatField(null=True)
        delPrize=models.FloatField(null=True)

        def __str__(self):
                return self.category.categoryName
           
class Location(models.Model):
        city=models.CharField(max_length=50)
        pin=models.IntegerField()
        
