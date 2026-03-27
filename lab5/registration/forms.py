from django import forms
from .models import UserProfile
 
class RegistrationForm(forms.ModelForm):
    class Meta:
        model  = UserProfile
        fields = ['name', 'username', 'password', 'age', 'gender', 'email']
        widgets = {
            'password': forms.PasswordInput(),
        }