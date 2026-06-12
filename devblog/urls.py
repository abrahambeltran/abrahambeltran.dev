from django.contrib import admin
from django.urls import include, path
from django_distill import distill_path

from blog.views import home, posts, about, chat
from blog.models import Post


def _all_posts():
    for post in Post.objects.all():
        yield {'slug': post.slug}


urlpatterns = [
    distill_path('', home, name='home', distill_func=lambda: [{}]),
    distill_path('about/', about, name='about', distill_func=lambda: [{}]),
    distill_path('chat/', chat, name='chat', distill_func=lambda: [{}]),
    distill_path('<slug:slug>/', posts, name='post', distill_func=_all_posts),
    path('admin/', admin.site.urls),
    path('__reload__/', include('django_browser_reload.urls')),
    path('markdownx/', include('markdownx.urls')),
]
