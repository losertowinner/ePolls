from django.db.models.functions import ExtractYear, ExtractMonth
from django.db.models import Count

from .models import User, Vote, Question, Choice


def load_users():
    return User.objects.filter(is_active=True).all()


def load_questions():
    return Question.objects.filter(is_active=True).order_by("-published_date").all()


# Statistics


def stats_votes(year):
    return (
        Vote.objects.filter(date_created__year=year)
        .annotate(month=ExtractMonth("date_created"))
        .values("month")
        .annotate(count=Count("id"))
        .order_by("month")
    )


def filter_options():
    return (
        Question.objects.annotate(year=ExtractYear("date_created"))
        .values("year")
        .order_by("-year")
        .distinct()
    )
