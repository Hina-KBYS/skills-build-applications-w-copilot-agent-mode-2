from rest_framework import serializers
from .models import User, Team, Activity, Workout, Leaderboard

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'team', 'first_name', 'last_name')

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name', 'description', 'created_at')

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ('id', 'user', 'type', 'duration', 'distance', 'calories', 'created_at')

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = ('id', 'name', 'description', 'duration', 'difficulty', 'created_at')

class LeaderboardSerializer(serializers.ModelSerializer):
    user_username = serializers.CharField(source='user.username', read_only=True)
    
    class Meta:
        model = Leaderboard
        fields = ('id', 'user', 'user_username', 'points', 'rank', 'updated_at')
