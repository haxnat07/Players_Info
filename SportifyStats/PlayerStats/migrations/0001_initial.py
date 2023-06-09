# Generated by Django 4.1.7 on 2023-05-29 17:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('number', models.IntegerField(blank=True, null=True)),
                ('position', models.CharField(blank=True, max_length=50, null=True)),
                ('team', models.CharField(blank=True, max_length=50, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='media/')),
                ('social_url', models.URLField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Stats',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wins', models.IntegerField(blank=True, null=True)),
                ('earned_run_average', models.IntegerField(blank=True, null=True)),
                ('strikeouts', models.IntegerField(blank=True, null=True)),
                ('pitches', models.IntegerField(blank=True, null=True)),
                ('strikeouts_9innings', models.IntegerField(blank=True, null=True)),
                ('strikeouts_walks', models.IntegerField(blank=True, null=True)),
                ('batting_average_allowed', models.IntegerField(blank=True, null=True)),
                ('batting_average', models.IntegerField(blank=True, null=True)),
                ('home_runs', models.IntegerField(blank=True, null=True)),
                ('runs_batted_in', models.IntegerField(blank=True, null=True)),
                ('stolen_bases', models.IntegerField(blank=True, null=True)),
                ('runs_created', models.IntegerField(blank=True, null=True)),
                ('isolated_power', models.IntegerField(blank=True, null=True)),
                ('fielding_percentage', models.IntegerField(blank=True, null=True)),
                ('caught_stealing_percentage', models.IntegerField(blank=True, null=True)),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stats', to='PlayerStats.player')),
            ],
            options={
                'verbose_name': 'Stat',
            },
        ),
        migrations.CreateModel(
            name='Injuries',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('injury', models.CharField(blank=True, max_length=50, null=True)),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='injuries', to='PlayerStats.player')),
            ],
            options={
                'verbose_name': 'Injurie',
            },
        ),
        migrations.CreateModel(
            name='Information',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bats', models.CharField(blank=True, max_length=100, null=True)),
                ('age', models.IntegerField(blank=True, null=True)),
                ('birth_date', models.DateField()),
                ('height', models.CharField(blank=True, max_length=50, null=True)),
                ('weight', models.CharField(blank=True, max_length=50, null=True)),
                ('area_from', models.CharField(blank=True, max_length=50, null=True)),
                ('college', models.CharField(blank=True, max_length=50, null=True)),
                ('drafted', models.CharField(blank=True, max_length=50, null=True)),
                ('nationality', models.CharField(blank=True, max_length=50, null=True)),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='info', to='PlayerStats.player')),
            ],
        ),
    ]
