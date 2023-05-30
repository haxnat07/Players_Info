from rest_framework import generics
from django.shortcuts import get_object_or_404
from .models import Player, Information, Stats
from .serializers import *


class PlayerListView(generics.ListAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class PlayerDetailView(generics.RetrieveAPIView):
    serializer_class = PlayerSerializer

    def get_object(self):
        pk = self.kwargs.get('pk')
        player = get_object_or_404(Player.objects.prefetch_related('info', 'stats', 'injuries'), pk=pk)
        return player
