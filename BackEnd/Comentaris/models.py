from django.contrib.auth.models import User
from django.db import models
from Punts.models import Punt
from Rutes.models import Ruta


class ComentariRuta (models.Model):
    text = models.CharField(max_length=500)
    id_usuari = models.ForeignKey(User, on_delete=models.CASCADE)
    id_ruta = models.ForeignKey(Ruta, on_delete=models.CASCADE)

    def __str__(self):
        return '%s %s' % (self.id_usuari_id, self.id_ruta_id)


class ComentariPunt(models.Model):
    text = models.CharField(max_length=500)
    id_usuari = models.ForeignKey(User, on_delete=models.CASCADE)
    id_punt = models.ForeignKey(Punt, on_delete=models.CASCADE)

    def __str__(self):
        return '%s %s' % (self.id_usuari_id, self.id_punt_id)