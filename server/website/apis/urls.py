from rest_framework import routers
from django.urls import path, include

from .views import (
    UserViewSet,
    QuestionViewSet,
    get_filter_options,
    get_votes_data,
)

router = routers.DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"questions", QuestionViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("chart/filter-options/", get_filter_options, name="chart-filter-options"),
    path("chart/votes/<int:year>/", get_votes_data, name="chart-votes"),
]
