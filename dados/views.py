from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout



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



    
@login_required
def home_view(request):
    return render(request, 'Telahome.html')

@login_required
def perfil_view(request):
    return render(request, 'Telaperfil.html')

@login_required
def agenda_view(request):
    return render(request, 'Telaagenda.html')


@login_required
def materias_view(request):
    return render(request, 'TelaMaterias.html')



def logout_view(request):
    logout(request)
    return redirect('login')
