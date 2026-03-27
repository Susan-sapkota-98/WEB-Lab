from django.shortcuts import render, redirect
from .forms import RegistrationForm
from .models import UserProfile
 
def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('user_list')
    else:
        form = RegistrationForm()
    return render(request, 'registration/register.html', {'form': form})
 
def user_list(request):
    users = UserProfile.objects.all()
    return render(request, 'registration/user_list.html', {'users': users})