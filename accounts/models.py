from django.contrib.auth.models import AbstractUser
from django.db import models
from animals.models import Animal

class User(AbstractUser):
    email = models.EmailField(unique=True)
    level = models.IntegerField(default=1)
    identified_animals = models.ManyToManyField(Animal, blank=True, related_name='identifiers')
    friends = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.username


class Leaderboard:
    @staticmethod
    def get_leaderboard():
        # Annotate each user with the count of identified animals and order by this count
        leaderboard = User.objects.annotate(
            identified_animals_count=models.Count('identified_animals')
        ).order_by('-identified_animals_count')
        return leaderboard