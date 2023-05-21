from django.db import models

# Create your models here.

class Player(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    number = models.IntegerField(null=True, blank=True)
    position = models.CharField(max_length=50, null=True, blank=True)
    team = models.CharField(max_length=50, null=True, blank=True)
    image = models.ImageField(upload_to='media/', null=True, blank=True)

    def __str__(self):
        return str(self.name)


class Information(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='info')
    bats = models.CharField(max_length=100, null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    birth_date = models.DateField()
    height = models.CharField(max_length=50, null=True, blank=True)
    weight = models.CharField(max_length=50, null=True, blank=True)
    area_from = models.CharField(max_length=50, null=True, blank=True)
    college = models.CharField(max_length=50, null=True, blank=True)
    drafted = models.CharField(max_length=50, null=True, blank=True)
    nationality = models.CharField(max_length=50, null=True, blank=True)
    
    def __str__(self):
        return str(self.player.name)


class Injuries(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='injuries')
    date = models.DateField()
    injury = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        verbose_name = "Injurie"

    def __str__(self):
        return str(self.player.name)


class Stats(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE, related_name='stats')
    wins = models.IntegerField(null=True, blank=True)
    earned_run_average = models.IntegerField(null=True, blank=True)
    strikeouts = models.IntegerField(null=True, blank=True)
    pitches = models.IntegerField(null=True, blank=True)
    strikeouts_9innings = models.IntegerField(null=True, blank=True)
    strikeouts_walks = models.IntegerField(null=True, blank=True)
    batting_average_allowed = models.IntegerField(null=True, blank=True)
    batting_average = models.IntegerField(null=True, blank=True)
    home_runs = models.IntegerField(null=True, blank=True)
    runs_batted_in = models.IntegerField(null=True, blank=True)
    stolen_bases = models.IntegerField(null=True, blank=True)
    runs_created = models.IntegerField(null=True, blank=True)
    isolated_power = models.IntegerField(null=True, blank=True)
    fielding_percentage = models.IntegerField(null=True, blank=True)
    caught_stealing_percentage = models.IntegerField(null=True, blank=True)

    class Meta:
        verbose_name = "Stat"

    def __str__(self):
        return str(self.player.name)