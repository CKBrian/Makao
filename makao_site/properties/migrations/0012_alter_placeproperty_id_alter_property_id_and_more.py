# Generated by Django 4.2.10 on 2024-02-29 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0011_alter_placeproperty_id_alter_property_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='placeproperty',
            name='id',
            field=models.UUIDField(default='316c78fe-e0d8-40ce-9a1f-4a91934dbf2a', editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='property',
            name='id',
            field=models.UUIDField(default='316c78fe-e0d8-40ce-9a1f-4a91934dbf2a', editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='propertyamenity',
            name='id',
            field=models.UUIDField(default='316c78fe-e0d8-40ce-9a1f-4a91934dbf2a', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]