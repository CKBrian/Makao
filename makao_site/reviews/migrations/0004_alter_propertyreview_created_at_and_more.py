# Generated by Django 5.0.2 on 2024-02-27 16:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0003_alter_propertyreview_created_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertyreview',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 40, 2, 426982)),
        ),
        migrations.AlterField(
            model_name='propertyreview',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 40, 2, 426982)),
        ),
        migrations.AlterField(
            model_name='review',
            name='created_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 40, 2, 426982)),
        ),
        migrations.AlterField(
            model_name='review',
            name='updated_at',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 27, 16, 40, 2, 426982)),
        ),
    ]
