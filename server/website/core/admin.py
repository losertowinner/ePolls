from django.contrib import admin
from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import render
from django.urls import path


@staff_member_required
def statistics_view(request):
    return render(
        request,
        "admin/statistics.html",
        {
            "title": "Statistics",
            "site_header": admin.site.site_header,
            "site_title": admin.site.site_title,
            "index_title": admin.site.index_title,
        },
    )


class AdminSite(admin.AdminSite):
    site_header = "ePolls 🏆 Admin Panel"
    site_title = "ePolls 🏆 Admin Panel"
    index_title = "Welcome to ePolls 🏆 Admin Panel"

    def get_app_list(self, request, _=None):
        app_list = super().get_app_list(request)
        app_list += [
            {
                "name": "Analysis & Statistics 📊",
                "app_label": "custom_app",
                "models": [
                    {
                        "name": "Statistics",
                        "object_name": "statistics",
                        "admin_url": "/admin/statistics",
                        "view_only": True,
                    }
                ],
            }
        ]
        return app_list

    def get_urls(self):
        urls = super().get_urls()
        urls += [
            path("statistics/", statistics_view, name="admin-statistics"),
        ]
        return urls
