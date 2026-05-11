from django.db import models

class Activity(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    duration = models.IntegerField(help_text="Duration in minutes")
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
