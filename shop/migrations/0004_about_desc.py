# Generated by Django 3.0.6 on 2020-06-07 19:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_auto_20200605_2230'),
    ]

    operations = [
        migrations.AddField(
            model_name='about',
            name='desc',
            field=models.CharField(default=' ', max_length=300),
        ),
    ]
