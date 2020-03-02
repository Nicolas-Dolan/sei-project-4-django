# from django.urls import path
# from .views import ListView, DetailView
# from .views import PokemonList, PokemonDetail

# urlpatterns = [
#     path('', ListView.as_view()),
#     path('<int:pk>/', DetailView.as_view()),
# ]


# urlpatterns = [
#     path('/pokemons', PokemonList.as_view()),
#     path('/pokemons/<int:pk>', PokemonDetail.as_view())
# ]


from django.urls import path
from .views import PokemonListView, PokemonDetailView

urlpatterns = [
    path('', PokemonListView.as_view()),
    path('<int:pk>/', PokemonDetailView.as_view())
]
