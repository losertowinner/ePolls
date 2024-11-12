from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, include
from oauth2_provider import urls as oauth2_urls

from .admin import statistics_view

urlpatterns = [
    path("", include("apis.urls")),
    path(
        "admin/statistics/",
        admin.site.admin_view(statistics_view),
        name="admin-statistics",
    ),
    path(
        "admin/password_reset/",
        auth_views.PasswordResetView.as_view(
            extra_context={"site_header": admin.site.site_header}
        ),
        name="admin_password_reset",
    ),
    path(
        "admin/password_reset/done/",
        auth_views.PasswordResetDoneView.as_view(
            extra_context={"site_header": admin.site.site_header}
        ),
        name="password_reset_done",
    ),
    path(
        "reset/<uidb64>/<token>/",
        auth_views.PasswordResetConfirmView.as_view(
            extra_context={"site_header": admin.site.site_header}
        ),
        name="password_reset_confirm",
    ),
    path(
        "reset/done/",
        auth_views.PasswordResetCompleteView.as_view(
            extra_context={"site_header": admin.site.site_header}
        ),
        name="password_reset_complete",
    ),
    path("admin/", admin.site.urls),
    path("o/", include(oauth2_urls)),
]
