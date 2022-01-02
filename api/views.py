from django.shortcuts import render, redirect
from django.template.response import TemplateResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
# Create your views here.

def login_to_app(request):
    print(request.user, type(request.user), dir(request))
    if not request.user.is_anonymous and request.method=='GET':
        return redirect('dashboard')
    elif request.method =='POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request,user)
            # logout(request)
            return redirect('dashboard')
        
    return TemplateResponse(request,'login.html',{})
@login_required
def main_app(request):

    return TemplateResponse(request,'index.html',{})
