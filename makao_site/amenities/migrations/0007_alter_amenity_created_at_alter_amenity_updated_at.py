# Generated by Django 5.0.2 on 2024-02-27 17:34

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('amenities', '0006_alter_amenity_created_at_alter_amenity_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='amenity',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 17, 34, 4, 509514)),
        ),
        migrations.AlterField(
            model_name='amenity',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 17, 34, 4, 509514)),
        ),
    ]
