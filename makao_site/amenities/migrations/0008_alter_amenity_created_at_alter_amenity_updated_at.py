# Generated by Django 5.0.2 on 2024-02-27 19:08

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('amenities', '0007_alter_amenity_created_at_alter_amenity_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='amenity',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='amenity',
            name='updated_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]