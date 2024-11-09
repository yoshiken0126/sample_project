from django.shortcuts import render

# Create your views here.
from rest_framework import generics #ビューを作成するためのツールセット
from .models import BoardGame
from .serializers import BoardGameSerializer #salonシリアライザーをインポート

class BoardGameListCreate(generics.ListCreateAPIView): 
    queryset = BoardGame.objects.all() #扱うクエリセットをSalonオブジェクト全てとして設定
    serializer_class = BoardGameSerializer #シリアライザーを設定