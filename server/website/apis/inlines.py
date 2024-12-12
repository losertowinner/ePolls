from django.contrib import admin

from .models import Question, Choice, Vote, Profile


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 4


class QuestionInline(admin.StackedInline):
    model = Question
    extra = 3


class VoteInline(admin.StackedInline):
    model = Vote
    extra = 3


class TagInline(admin.TabularInline):
    model = Question.tags.through


class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
