from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from djongo import models

from octofit_tracker import models as octo_models

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        User = get_user_model()
        Team = octo_models.Team
        Activity = octo_models.Activity
        Leaderboard = octo_models.Leaderboard
        Workout = octo_models.Workout

        # データ削除
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # チーム作成
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # ユーザー作成
        users = [
            User(email='ironman@marvel.com', username='ironman', team=marvel),
            User(email='captain@marvel.com', username='captain', team=marvel),
            User(email='batman@dc.com', username='batman', team=dc),
            User(email='superman@dc.com', username='superman', team=dc),
        ]
        for user in users:
            user.set_password('password')
            user.save()

        # アクティビティ作成
        Activity.objects.create(user=users[0], type='run', duration=30)
        Activity.objects.create(user=users[1], type='cycle', duration=45)
        Activity.objects.create(user=users[2], type='swim', duration=60)
        Activity.objects.create(user=users[3], type='yoga', duration=20)

        # ワークアウト作成
        Workout.objects.create(name='Morning Cardio', description='Cardio for all')
        Workout.objects.create(name='Strength Training', description='Strength for all')

        # リーダーボード作成
        Leaderboard.objects.create(user=users[0], points=100)
        Leaderboard.objects.create(user=users[1], points=90)
        Leaderboard.objects.create(user=users[2], points=80)
        Leaderboard.objects.create(user=users[3], points=70)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data'))
