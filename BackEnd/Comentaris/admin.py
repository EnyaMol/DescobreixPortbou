from django.contrib import admin

# Register your models here.
from Comentaris.models import ComentariRuta, ComentariPunt

admin.site.register(ComentariRuta)
admin.site.register(ComentariPunt)