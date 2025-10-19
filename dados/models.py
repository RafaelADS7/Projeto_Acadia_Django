from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class Usuario(models.Model):
    nome = models.CharField(max_length=100, null=False)
    email = models.EmailField(unique=True, null=False)
    senha_hash = models.CharField(max_length=255, null=False)
    STATUS_CHOICES = [
        ('ativo', 'Ativo'),
        ('inativo', 'Inativo'),
    ]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='ativo')

    def __str__(self):
        return self.nome
