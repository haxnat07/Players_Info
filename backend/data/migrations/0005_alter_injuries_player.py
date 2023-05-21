# Generated by Django 4.1.7 on 2023-05-16 19:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0004_injuries'),
    ]

    operations = [
        migrations.AlterField(
            model_name='injuries',
            name='player',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='injuries', to='data.player'),
        ),
    ]
