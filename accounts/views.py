from rest_framework import viewsets
from django.shortcuts import render
from .models import User
from .models import Leaderboard
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def leaderboard_view(request):
        leaderboard_data = Leaderboard.get_leaderboard()
        return render(request, 'leaderboard.html', {'leaderboard': leaderboard_data})