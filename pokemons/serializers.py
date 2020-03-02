# from rest_framework import serializers
# from .models import Pokemon

# class PokemonSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Pokemon
#         fields = ('id', 'name', 'front_img', 'dex_num')


from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Pokemon
User = get_user_model()
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')
class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        # fields = ('id', 'name', 'frontImg', 'hp', 'attack', 'defence', 'spAt', 'spDf', 'speed', 'type1', 'height')
        fields = '__all__'
class PopulatedPokemonSerializer(PokemonSerializer):
    owner = UserSerializer()