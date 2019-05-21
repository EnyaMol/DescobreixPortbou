from django.db import models

# Create your models here.

class Ruta (models.Model):
    nomruta = models.CharField(max_length=200)
    descripcio = models.CharField(max_length=500)
    distancia_km = models.IntegerField()
    dificultat = models.IntegerField()

    def __str__(self):
        return self.nomruta