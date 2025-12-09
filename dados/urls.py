from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_view, name='login'),
    path('home/', views.home_view, name='home'),
    path('perfil/', views.perfil_view, name='perfil'),
    path('agenda/', views.agenda_view, name='agenda'),
    path("materias/", views.materias_view, name="materias"),
    path('logout/', views.logout_view, name='logout'),

]
