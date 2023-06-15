from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

from .models import Post
# Create your views here.

def home(request):
    posts = Post.objects.all()
    return render(request, "blog/home.html", {'posts' : posts})

def posts(request, slug):
    post = get_object_or_404(Post, slug=slug)
    return render(request, "blog/post.html", {'post': post})

def about(request):
    return render(request, "blog/about.html")

def chat(request):
    return render(request, "blog/chat.html")