# Generated by Django 5.0.2 on 2024-03-01 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_alter_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.UUIDField(default='b2349bcb-5bc4-4116-bfa1-7d0d39317537', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
