# Generated by Django 5.0.2 on 2024-03-01 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0012_alter_placeproperty_id_alter_property_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='placeproperty',
            name='id',
            field=models.UUIDField(default='7a3be203-43dc-4246-a64c-b9bfb45a2db5', editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='property',
            name='id',
            field=models.UUIDField(default='7a3be203-43dc-4246-a64c-b9bfb45a2db5', editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='propertyamenity',
            name='id',
            field=models.UUIDField(default='7a3be203-43dc-4246-a64c-b9bfb45a2db5', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]