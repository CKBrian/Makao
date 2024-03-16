# Generated by Django 5.0.2 on 2024-03-01 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0018_alter_place_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='place',
            name='properties',
        ),
        migrations.AlterField(
            model_name='place',
            name='id',
            field=models.UUIDField(default='bcb716d9-e0de-4915-b0d7-33fc77d4de37', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
