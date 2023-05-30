from django.urls import path
from .views import *

urlpatterns = [
    path('player/', PlayerListView.as_view(), name='player-list'),
    path('player/<int:pk>/', PlayerDetailView.as_view()),
]
