# Generated by Django 5.0.2 on 2024-02-27 16:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0005_alter_placeproperty_created_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='placeproperty',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 58, 25, 291218)),
        ),
        migrations.AlterField(
            model_name='placeproperty',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 58, 25, 291218)),
        ),
        migrations.AlterField(
            model_name='property',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 58, 25, 291218)),
        ),
        migrations.AlterField(
            model_name='property',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 58, 25, 291218)),
        ),
        migrations.AlterField(
            model_name='propertyamenity',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 58, 25, 291218)),
        ),
        migrations.AlterField(
            model_name='propertyamenity',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 58, 25, 291218)),
        ),
    ]
