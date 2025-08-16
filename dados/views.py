from django.shortcuts import render
from django.contrib.auth import authenticate

# Create your views here.
def login_view(request):
    return render(request, 'Telalogin.html')

def home_view(request):
    return render(request, 'Telahome.html')