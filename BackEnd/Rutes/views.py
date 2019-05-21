from django.shortcuts import render, get_object_or_404

# Create your views here.
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render

# Create your views here.
import Rutes
from Rutes.models import Ruta
from json import loads

def json(request):
    ruta = Ruta.objects.all()
    contador = 0;
    ru = []
    for rut in ruta:
        contador=contador+1
        idruta = rut.id
        nomruta = rut.nomruta
        descripcio = rut.descripcio
        distancia_km = rut.distancia_km
        dificultat = rut.dificultat
        rutes = {'id':idruta, 'nomruta': nomruta, 'descripcio': descripcio, 'distanciakm': distancia_km, 'dificultat': dificultat}
        ru.append(rutes)

    rutas = {'rutas': ru}

    return JsonResponse(rutas)

