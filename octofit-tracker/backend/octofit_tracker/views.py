from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import User, Team, Activity, Workout, Leaderboard
from .serializers import (
    UserSerializer, TeamSerializer, ActivitySerializer,
    WorkoutSerializer, LeaderboardSerializer
)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    
    @action(detail=True, methods=['get'])
    def members(self, request, pk=None):
        team = self.get_object()
        members = User.objects.filter(team=team)
        serializer = UserSerializer(members, many=True)
        return Response(serializer.data)

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    
    def get_queryset(self):
        queryset = Activity.objects.all()
        user_id = self.request.query_params.get('user', None)
        if user_id is not None:
            queryset = queryset.filter(user_id=user_id)
        return queryset

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all().order_by('-points')
    serializer_class = LeaderboardSerializer
