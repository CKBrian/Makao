# Generated by Django 5.0.2 on 2024-03-01 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0017_alter_placeproperty_id_alter_property_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='placeproperty',
            name='id',
            field=models.UUIDField(default='73604c81-0421-4fff-a3bc-a92d9e3329a9', editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='property',
            name='id',
            field=models.UUIDField(default='73604c81-0421-4fff-a3bc-a92d9e3329a9', editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='propertyamenity',
            name='id',
            field=models.UUIDField(default='73604c81-0421-4fff-a3bc-a92d9e3329a9', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
