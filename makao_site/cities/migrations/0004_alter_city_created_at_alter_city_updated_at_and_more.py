# Generated by Django 5.0.2 on 2024-02-27 16:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0003_alter_city_created_at_alter_city_updated_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='city',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 57, 50, 855079)),
        ),
        migrations.AlterField(
            model_name='city',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 57, 50, 855079)),
        ),
        migrations.AlterField(
            model_name='cityplace',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 57, 50, 855079)),
        ),
        migrations.AlterField(
            model_name='cityplace',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 57, 50, 855079)),
        ),
    ]
