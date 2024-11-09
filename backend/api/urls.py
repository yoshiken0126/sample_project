from django.urls import path
from .views import BoardGameListCreate  #viewsで作成したSalonListCreateをインポート

urlpatterns = [
       path('boardgame/', BoardGameListCreate.as_view(), name='boardgame-list-create')
 ] #SalonListCreateを呼び出すためのurlを設定