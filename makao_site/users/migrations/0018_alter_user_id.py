# Generated by Django 5.0.2 on 2024-03-01 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0017_alter_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.UUIDField(default='bcb716d9-e0de-4915-b0d7-33fc77d4de37', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
