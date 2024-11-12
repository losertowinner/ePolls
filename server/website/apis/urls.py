from rest_framework import routers
from django.urls import path, include

from .views import (
    UserViewSet,
    get_filter_options,
    yearly_votes_chart,
)

router = routers.DefaultRouter()
router.register(r"users", UserViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("chart/filter-options/", get_filter_options, name="chart-filter-options"),
    path("chart/votes/<int:year>/", yearly_votes_chart, name="chart-votes"),
]
