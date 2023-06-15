from django.contrib import admin
from markdownx.admin import MarkdownxModelAdmin

from .models import Post
# Register your models here.

class PostAdmin(MarkdownxModelAdmin):
    pass

admin.site.register(Post, PostAdmin)