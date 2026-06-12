from django.shortcuts import render, get_object_or_404
from django_distill import distill_path

from .models import Post


def _all_posts():
    for post in Post.objects.all():
        yield {'slug': post.slug}


def home(request):
    posts = Post.objects.all()
    return render(request, "blog/home.html", {'posts': posts})


def posts(request, slug):
    post = get_object_or_404(Post, slug=slug)
    return render(request, "blog/post.html", {'post': post})


def about(request):
    return render(request, "blog/about.html")


def chat(request):
    return render(request, "blog/chat.html")
