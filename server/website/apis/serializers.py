from rest_framework import serializers

from .models import User, Profile, Question, Choice


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["mobile", "location"]


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()
    first_name = serializers.CharField(max_length=100, required=True)
    last_name = serializers.CharField(max_length=100, required=True)

    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "password",
            "first_name",
            "last_name",
            "avatar",
            "profile",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        profile_data = validated_data.pop("profile")
        user = User(**validated_data)
        user.set_password(validated_data["password"])
        user.save()
        Profile.objects.create(user=user, **profile_data)
        return user


class CurrentUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = UserSerializer.Meta.fields + ["last_login"]


class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ["id", "content"]


class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(many=True)

    class Meta:
        model = Question
        fields = ["slug", "title", "description", "choices"]
