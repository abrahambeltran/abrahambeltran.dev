# Generated by Django 4.1.2 on 2023-06-15 19:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_mymodel_alter_post_options'),
    ]

    operations = [
        migrations.DeleteModel(
            name='MyModel',
        ),
    ]
