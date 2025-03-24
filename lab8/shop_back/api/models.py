from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    def to_json(self):
        return {"name": self.name}

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    image = models.URLField()
    images = models.JSONField()
    link = models.URLField(default='')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")

    def __str__(self):
        return f"{self.name} - {self.price} KZT"

    def to_json(self):
        return {
            "name": self.name,
            "price": self.price,
            "description": self.description,
            "count": self.count,
            "is_active": self.is_active,
            "image": self.image,
            "images": self.images,
            "category": self.category.name
        }
