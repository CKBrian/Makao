# Generated by Django 5.0.2 on 2024-02-27 16:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0003_alter_place_created_at_alter_place_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='place',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 57, 50, 855079)),
        ),
        migrations.AlterField(
            model_name='place',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 57, 50, 855079)),
        ),
    ]
