# Generated by Django 5.0.2 on 2024-03-01 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0014_alter_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.UUIDField(default='57025204-2c2d-40a7-83c9-8b2597eb9f5a', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
