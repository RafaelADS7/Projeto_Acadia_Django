from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.models import User

# Create your views here.
def login_view(request):
    if request.method == "POST":
        email = request.POST.get('email')
        senha = request.POST.get('senha')

        try:
            user_obj = User.objects.get(email=email)
            user = authenticate(request=request, username=user_obj.username, password=senha)
            if user is not None:
                login(request, user)
                return redirect('home')
            else:
                messages.error(request, 'Senha incorreta')
        except User.DoesNotExist:
            messages.error(request, 'Email não encontrado')
    return render(request, 'Telalogin.html')



    

def home_view(request):
    return render(request, 'Telahome.html')

def perfil_view(request):
    return render(request, 'Telaperfil.html')