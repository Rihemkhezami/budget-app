from django.contrib import admin

# Register your models here.
from .models import User,Budget,Category,Expense


admin.site.register(User)   
admin.site.register(Budget)   
admin.site.register(Expense)  
admin.site.register(Category)     



