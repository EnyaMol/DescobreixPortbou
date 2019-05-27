from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
import Punts
from Punts.models import Punt


def json(request):
    punt = Punt.objects.all()
    contador = 0;
    pu = []
    for pun in punt:
        contador=contador+1
        idpunt = pun.id
        nompunt = pun.nompunt
        descripcio = pun.descripcio
        longitud = pun.latitud
        latitud = pun.longitud
        punts = {'id':idpunt,'nompunt': nompunt, 'descripcio': descripcio, 'longitud': longitud, 'latitud': latitud}
        pu.append(punts)

    punts = {'punts': pu}

    return JsonResponse(punts)
