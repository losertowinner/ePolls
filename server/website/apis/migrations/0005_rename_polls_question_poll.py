# Generated by Django 5.1.3 on 2024-11-12 08:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0004_rename_pub_date_poll_published_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='question',
            old_name='polls',
            new_name='poll',
        ),
    ]