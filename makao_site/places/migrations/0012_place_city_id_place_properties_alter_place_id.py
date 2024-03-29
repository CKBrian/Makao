# Generated by Django 5.0.2 on 2024-03-01 19:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0012_alter_city_id_alter_cityplace_id'),
        ('places', '0011_alter_place_id'),
        ('properties', '0013_alter_placeproperty_id_alter_property_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='place',
            name='city_id',
            field=models.ForeignKey(default='7a3be203-43dc-4246-a64c-b9bfb45a2db5', on_delete=django.db.models.deletion.CASCADE, to='cities.city'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='place',
            name='properties',
            field=models.ForeignKey(default='7a3be203-43dc-4246-a64c-b9bfb45a2db5', on_delete=django.db.models.deletion.CASCADE, to='properties.property'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='place',
            name='id',
            field=models.UUIDField(default='7a3be203-43dc-4246-a64c-b9bfb45a2db5', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
