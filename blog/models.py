import datetime
from django.db import models
from django.utils import timezone
from markdownx.models import MarkdownxField
from markdownx.widgets import MarkdownxWidget

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField()
    intro = models.TextField()
    body = MarkdownxField()
    created_at = models.DateTimeField(auto_now_add=True)  
    class Meta:
        ordering = ('-created_at',)
