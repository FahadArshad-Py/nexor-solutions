from .models import ContactMessage
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.http import HttpResponse


def home(request):
    return render(request, "website/index.html")


def about(request):
    return render(request, "website/about.html")


def services(request):
    return render(request, "website/services.html")


def solution(request):
    return render(request, "website/solution.html")


def contact(request):
    if request.method == "POST":
        full_name = request.POST.get("full_name")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        service = request.POST.get("service")
        message = request.POST.get("message")

        ContactMessage.objects.create(
            full_name=full_name,
            email=email,
            phone=phone,
            service=service,
            message=message
        )

        return redirect("contact")

    return render(request, "website/contact.html")


def nexor(request):
    return render(request, "website/nexor.html")

def create_admin(request):
    if not User.objects.filter(username="admin").exists():
        User.objects.create_superuser(
            username="admin",
            email="admin@nexorsolutions.com",
            password="ChangeThisPassword123"
        )
        return HttpResponse("Admin created successfully.")

    return HttpResponse("Admin already exists.")