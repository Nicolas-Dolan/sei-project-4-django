# pylint: disable=no-member
from django.db import models
# from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.
class Pokemon(models.Model):
    name = models.CharField(max_length=50)
    dexNum = models.IntegerField(default=1)
    frontImg = models.CharField(max_length=300, default='SOME STRING')
    backImg = models.CharField(max_length=300, default='SOME STRING')
    hp = models.IntegerField(default=1)
    attack = models.IntegerField(default=1)
    defence = models.IntegerField(default=1)
    spAt = models.IntegerField(default=1)
    spDf = models.IntegerField(default=1)
    speed = models.IntegerField(default=1)
    type1 = models.CharField(max_length=50, default='normal')
    type2 = models.CharField(max_length=50, default='none')
    shape = models.CharField(max_length=50, default='SOME STRING')
    height = models.IntegerField(default=1)
    eggGroup = models.CharField(max_length=50, default='SOME STRING')
    isBaby = models.BooleanField(null=True)
    generation = models.CharField(max_length=50, default='SOME STRING')
    description = models.TextField(default='SOME STRING')
    owner = models.ForeignKey(User, related_name='pokemons', null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'