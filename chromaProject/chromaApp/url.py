from django.urls import path
from .views import *
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('PostProduct/', PostchromaProductView),
    path('api/getproductdata/', GetchromaProductView),
    path('api/LocationView/', LocationView),
    path('api/GetLocationView/', GetLocationView),
    # path('api/LocationView/', PutLocationView),



]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)