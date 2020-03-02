#THE BELOW CODE IS FROM CHAPS 1-3
# from rest_framework.views import APIView # get the APIView class from DRF
# from rest_framework.response import Response # get the Response class from DRF

# from .models import Pokemon
# from .serializers import PokemonSerializer # get the PokemonSerializer

# # Create your views here.
# class ListView(APIView): # extend the APIView

#     def get(self, _request):
#         pokemons = Pokemon.objects.all() # get all the pokemons
#         serializer = PokemonSerializer(pokemons, many=True)

#         return Response(serializer.data) # send the JSON to the client


# class DetailView(APIView): # extend the APIView

#     def get(self, _request, pk):
#         pokemon = Pokemon.objects.get(pk=pk) # get a pokemon by id (pk means primary key)
#         serializer = PokemonSerializer(pokemon)

#         return Response(serializer.data) # send the JSON to the client



#THIS CODE IS FROM THE VIEWS CHAPTER UNDER GENERICS
# from rest_framework.views import APIView
# from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

# class PokemonList(ListCreateAPIView):
#     queryset = Pokemon.objects.all()
#     serializer_class = PokemonSerializer


# class PokemonDetail(RetrieveUpdateDestroyAPIView):
#     queryset = Pokemon.objects.all()
#     serializer_class = PokemonSerializer


# pylint: disable=no-member
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT, HTTP_202_ACCEPTED, HTTP_401_UNAUTHORIZED
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Pokemon
from .serializers import PokemonSerializer, PopulatedPokemonSerializer
class PokemonListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    def get(self, _request):
        pokemons = Pokemon.objects.all()
        serialized_pokemons = PopulatedPokemonSerializer(pokemons, many=True)
        return Response(serialized_pokemons.data)
    def post(self, request):
        request.data['owner'] = request.user.id
        pokemon = PokemonSerializer(data=request.data)
        if pokemon.is_valid():
            pokemon.save()
            return Response(pokemon.data, status=HTTP_201_CREATED)
        return Response(pokemon.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
class PokemonDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    def get(self, _request, pk):
        try:
            pokemon = Pokemon.objects.get(pk=pk)
            serialized_pokemon = PopulatedPokemonSerializer(pokemon)
            return Response(serialized_pokemon.data)
        except Pokemon.DoesNotExist:
            return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)
    def put(self, request, pk):
        request.data['owner'] = request.user.id
        pokemon = Pokemon.objects.get(pk=pk)
        if pokemon.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        updated_pokemon = PokemonSerializer(pokemon, data=request.data)
        if updated_pokemon.is_valid():
            updated_pokemon.save()
            return Response(updated_pokemon.data)
        return Response(updated_pokemon.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    def delete(self, request, pk):
        pokemon = Pokemon.objects.get(pk=pk)
        if pokemon.owner.id != request.user.id:
            return Response(status=HTTP_401_UNAUTHORIZED)
        pokemon.delete()
        return Response(status=HTTP_204_NO_CONTENT)

   #BELOW IS THE ORIGINAL CODE FOR EDIT AND DELETE, WHICH WORKS BUT DOES NOT PREVENT NON OWNERS FROM EDITING/DELETING
    # def put(self, request, pk):
    #     try:
    #         pokemon = Pokemon.objects.get(pk=pk)
    #         updated_pokemon = PokemonSerializer(pokemon, data=request.data)
    #         if updated_pokemon.is_valid():
    #             updated_pokemon.save()
    #             return Response(updated_pokemon.data, status=HTTP_202_ACCEPTED)
    #         return Response(updated_pokemon.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
    #     except Pokemon.DoesNotExist:
    #         return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)
    # def delete(self, _request, pk):
    #     try:
    #         pokemon = Pokemon.objects.get(pk=pk)
    #         pokemon.delete()
    #         return Response(status=HTTP_204_NO_CONTENT)
    #     except Pokemon.DoesNotExist:
    #         return  Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)






# class CommentListView(APIView):
#     permission_classes = (IsAuthenticatedOrReadOnly, )
#     def post(self, request, pk):
#         request.data['pokemon'] = pk
#         request.data['owner'] = request.user.id
#         comment = CommentSerializer(data=request.data)
#         if comment.is_valid():
#             comment.save()
#             pokemon = Pokemon.objects.get(pk=pk)
#             serialized_pokemon = PopulatedPokemonSerializer(pokemon)
#             return Response(serialized_pokemon.data, status=HTTP_201_CREATED)
#         return Response(comment.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
# class CommentDetailView(APIView):
#     permission_classes = (IsAuthenticatedOrReadOnly, )
#     def delete(self, request, **kwargs):
#         try:
#             comment = Comment.objects.get(pk=kwargs['comment_pk'])
#             if comment.owner.id != request.user.id:
#                 return Response(status=HTTP_401_UNAUTHORIZED)
#             comment.delete()
#             return Response(status=HTTP_204_NO_CONTENT)
#         except Comment.DoesNotExist:
#             return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)