# Generated by Django 5.0.2 on 2024-03-01 19:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0016_alter_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.UUIDField(default='ac3a6a31-6c4b-473a-98e3-918e65253b12', editable=False, primary_key=True, serialize=False, unique=True),
        ),
    ]
