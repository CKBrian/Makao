# Generated by Django 5.0.2 on 2024-03-01 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cities', '0011_alter_city_id_alter_cityplace_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='city',
            name='id',
            field=models.UUIDField(default='7a3be203-43dc-4246-a64c-b9bfb45a2db5', editable=False, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='cityplace',
            name='id',
            field=models.UUIDField(default='7a3be203-43dc-4246-a64c-b9bfb45a2db5', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]