# Generated by Django 5.0.2 on 2024-03-01 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0011_alter_propertyreview_id_alter_review_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertyreview',
            name='id',
            field=models.UUIDField(default='87a61e7b-0163-4e5b-9e9c-162241549067', editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='review',
            name='id',
            field=models.UUIDField(default='87a61e7b-0163-4e5b-9e9c-162241549067', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
