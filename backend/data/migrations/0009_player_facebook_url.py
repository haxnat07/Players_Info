# Generated by Django 4.1.7 on 2023-05-21 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0008_stats_batting_average_allowed_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='player',
            name='facebook_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]