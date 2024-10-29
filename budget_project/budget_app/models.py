from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('user', 'User'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')
    phone = models.CharField(max_length=15, blank=True, null=True) 
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)



    groups = models.ManyToManyField(
        'auth.Group',
        related_name='appbudget_user_groups', 
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups'
    )
    
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='appbudget_user_permissions',  
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions'
    )

class Budget(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    total = models.DecimalField(max_digits=10,decimal_places=2)

class Category(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Expense(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    budget = models.ForeignKey(Budget, on_delete=models.CASCADE)
    description = models.TextField()
    date = models.DateField(auto_now_add=True)