from django.contrib import admin
from .models import User, Team, Activity, Workout, Leaderboard

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'team')
    search_fields = ('username', 'email')

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at')
    search_fields = ('name',)

@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('user', 'type', 'duration', 'created_at')
    list_filter = ('type', 'created_at')
    search_fields = ('user__username',)

@admin.register(Workout)
class WorkoutAdmin(admin.ModelAdmin):
    list_display = ('name', 'difficulty', 'duration', 'created_at')
    list_filter = ('difficulty', 'created_at')
    search_fields = ('name',)

@admin.register(Leaderboard)
class LeaderboardAdmin(admin.ModelAdmin):
    list_display = ('user', 'points', 'rank', 'updated_at')
    list_filter = ('updated_at',)
    search_fields = ('user__username',)
    ordering = ('-points',)
