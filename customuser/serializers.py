from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'name', 'rut', 'email', 'phone', 'password']
        extra_kwargs = {
            'username': {'required': True, 'allow_blank': False},
            'name': {'required': True, 'allow_blank': False},
            'rut': {'required': True, 'allow_blank': False},
            'email': {'required': True, 'allow_blank': False},
            'phone': {'required': True, 'allow_blank': False},
            'password': {'write_only': True, 'required': True, 'allow_blank': False}
        }

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user
