from django.db import models

# Create your models here.


class Punt (models.Model):
    nompunt = models.CharField(max_length=200)
    descripcio = models.CharField(max_length=500)
    longitud = models.IntegerField()
    latitud = models.IntegerField()

    def __str__(self):
        return self.nompunt
