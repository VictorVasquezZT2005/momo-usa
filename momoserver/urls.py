"""
URL configuration for momoserver project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# momoserver/urls.py

from django.contrib import admin
from django.urls import path
from accounts import views

urlpatterns = [
    path('admin/', admin.site.urls),  # Ruta para el panel de administración de Django
    path('', views.index, name='index'),  # Ruta para la página principal
    path('register/', views.register, name='register'),  # Ruta para la vista de registro
    path('login/', views.login_view, name='login'),  # Ruta para la vista de inicio de sesión
]

# Si estás usando vistas basadas en clases o quieres incluir otras aplicaciones,
# puedes añadir más rutas aquí.

