# Generated by Django 4.1.7 on 2023-05-16 17:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0002_player_age_player_image_player_team'),
    ]

    operations = [
        migrations.RenameField(
            model_name='player',
            old_name='age',
            new_name='number',
        ),
    ]
