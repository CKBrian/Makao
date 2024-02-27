# Generated by Django 5.0.2 on 2024-02-27 16:31

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Amenity',
            fields=[
                ('id', models.UUIDField(editable=False, primary_key=True, serialize=False, unique=True)),
                ('created_at', models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 31, 48, 724004))),
                ('updated_at', models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 31, 48, 724004))),
                ('name', models.CharField(max_length=255, unique=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]