# Generated by Django 5.0.2 on 2024-03-02 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0019_alter_propertyreview_id_alter_review_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertyreview',
            name='id',
            field=models.UUIDField(default='ed00653c-ec5f-4385-a706-6f36dcb35983', editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='review',
            name='id',
            field=models.UUIDField(default='ed00653c-ec5f-4385-a706-6f36dcb35983', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
