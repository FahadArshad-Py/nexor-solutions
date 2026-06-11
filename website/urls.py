from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('services/', views.services, name='services'),
    path('solution/', views.solution, name='solution'),
    path('contact/', views.contact, name='contact'),
    path('nexor/', views.nexor, name='nexor'),
]