# Generated by Django 5.0.2 on 2024-03-02 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0019_remove_place_properties_alter_place_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='place',
            name='id',
            field=models.UUIDField(default='a247c71d-4a17-4f85-845b-55486a8eeecc', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
