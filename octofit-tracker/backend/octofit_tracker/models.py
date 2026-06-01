from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    """Custom User model"""
    email = models.EmailField(unique=True)
    team = models.ForeignKey('Team', on_delete=models.SET_NULL, null=True, blank=True)
    
    class Meta:
        db_table = 'users'

class Team(models.Model):
    """Team model for team management"""
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'teams'
    
    def __str__(self):
        return self.name

class Activity(models.Model):
    """Activity model for logging user activities"""
    ACTIVITY_TYPES = (
        ('run', 'Running'),
        ('cycle', 'Cycling'),
        ('swim', 'Swimming'),
        ('yoga', 'Yoga'),
        ('gym', 'Gym'),
    )
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=20, choices=ACTIVITY_TYPES)
    duration = models.IntegerField(help_text="Duration in minutes")
    distance = models.FloatField(default=0, blank=True)
    calories = models.IntegerField(default=0, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'activities'
    
    def __str__(self):
        return f"{self.user.username} - {self.type}"

class Workout(models.Model):
    """Workout model for predefined workouts"""
    name = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.IntegerField(default=30, help_text="Duration in minutes")
    difficulty = models.CharField(max_length=20, choices=[
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ], default='medium')
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'workouts'
    
    def __str__(self):
        return self.name

class Leaderboard(models.Model):
    """Leaderboard model for ranking users"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    points = models.IntegerField(default=0)
    rank = models.IntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'leaderboards'
        ordering = ['-points']
    
    def __str__(self):
        return f"{self.user.username} - {self.points} points"
