from django.contrib import admin

from .models import Question, Choice, Vote, Poll, Profile


class ChoiceInline(admin.StackedInline):
    model = Choice
    extra = 4


class QuestionInline(admin.StackedInline):
    model = Question
    extra = 3


class VoteInline(admin.StackedInline):
    model = Vote
    extra = 3


class TagPollInline(admin.TabularInline):
    model = Poll.tags.through


class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
