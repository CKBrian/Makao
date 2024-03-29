# Generated by Django 5.0.2 on 2024-02-27 16:31

import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('properties', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PropertyReview',
            fields=[
                ('id', models.UUIDField(editable=False, primary_key=True, serialize=False, unique=True)),
                ('created_at', models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 31, 48, 724004))),
                ('updated_at', models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 31, 48, 724004))),
                ('property_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='properties.property')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.UUIDField(editable=False, primary_key=True, serialize=False, unique=True)),
                ('created_at', models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 31, 48, 724004))),
                ('updated_at', models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 31, 48, 724004))),
                ('text', models.TextField()),
                ('rating', models.DecimalField(decimal_places=1, default=0.0, max_digits=2)),
                ('property_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='properties.property')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
