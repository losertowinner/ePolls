from django.contrib.admin.views.decorators import staff_member_required
from django.http import JsonResponse

from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import UserSerializer, CurrentUserSerializer
from .utils import (
    months,
    generate_color_palette,
    get_year_dict,
)
from .dao import load_users, stats_votes, filter_options


@staff_member_required
def get_filter_options(request):
    queries = filter_options()
    options = [poll["year"] for poll in queries]

    return JsonResponse(
        {
            "options": options,
        }
    )


@staff_member_required
def yearly_votes_chart(request, year):
    queries = stats_votes(year=year)

    votes_dict = get_year_dict()

    for group in queries:
        votes_dict[months[group["month"] - 1]] = group["count"]

    background_palette, border_palette = generate_color_palette(len(queries))

    datasets = [
        dict(
            label="Amount of Votes",
            backgroundColor=background_palette,
            borderColor=border_palette,
            borderWidth=1,
            data=list(votes_dict.values()),
        )
    ]

    return JsonResponse(
        {
            "title": f"Votes Distribution for Year {year}",
            "data": {"labels": list(votes_dict.keys()), "datasets": datasets},
        }
    )


class UserViewSet(viewsets.ModelViewSet):
    queryset = load_users()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=["get"], url_path="current-user", name="Current User")
    def current_user(self, request):
        """Get the currently logged on user."""
        return Response(
            CurrentUserSerializer(request.user).data,
            status=status.HTTP_200_OK,
        )
