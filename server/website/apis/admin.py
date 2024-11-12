from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import Question, Choice, Category, Poll, Vote, Tag, User, Profile
from .inlines import (
    QuestionInline,
    ChoiceInline,
    VoteInline,
    TagPollInline,
    ProfileInline,
)
from .forms import UserChangeForm, UserCreationForm
from .actions import make_actived, export_as_csv, export_as_json


class Common(admin.ModelAdmin):
    empty_value_display = "-Unknown-"
    list_display = ["is_active"]
    date_hierarchy = "date_created"
    list_filter = ["is_active"]
    list_editable = ["is_active"]
    list_per_page = 10


class SlugAdmin(Common):
    prepopulated_fields = {"slug": ["title"]}
    search_fields = ["slug", "title"]


class PollAdmin(SlugAdmin):
    list_display = ["title", "questions", "published_date"] + SlugAdmin.list_display
    inlines = [QuestionInline, TagPollInline]
    exclude = ["tags"]


class QuestionAdmin(Common):
    list_display = ["title", "poll"] + Common.list_display
    inlines = [ChoiceInline]


class ChoiceAdmin(Common):
    list_display = ["content", "is_active", "votes"] + Common.list_display
    inlines = [VoteInline]


class VoteAdmin(Common):
    list_display = ["user", "choice"] + Common.list_display


class CategoryAdmin(SlugAdmin):
    list_display = ["title"] + Common.list_display + ["date_created", "date_updated"]
    list_filter = Common.list_filter + ["title"]


class TagAdmin(SlugAdmin):
    list_display = ["title"] + SlugAdmin.list_display


class UserAdmin(BaseUserAdmin, Common):
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ["username", "avatar_preview", "is_active", "last_login"]
    date_hierarchy = "date_joined"
    list_editable = ["is_active"]
    search_fields = ["email", "username", "first_name", "last_name"]
    list_filter = ["is_superuser", "is_active", "is_staff"]

    fieldsets = [
        (None, {"fields": ["email", "username", "password"]}),
        (
            "Personal Info",
            {
                "fields": [
                    "first_name",
                    "last_name",
                    "avatar",
                    "is_active",
                    "date_joined",
                    "last_login",
                ]
            },
        ),
        (
            "Permissions",
            {"fields": ["is_superuser", "is_staff", "user_permissions"]},
        ),
    ]
    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": [
                    "email",
                    "password",
                    "confirm_password",
                    "avatar",
                    "username",
                    "first_name",
                    "last_name",
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "user_permissions",
                ],
            },
        ),
    ]
    ordering = ["email", "first_name", "last_name"]
    filter_horizontal = ["user_permissions"]
    readonly_fields = ["avatar_preview"]
    inlines = [ProfileInline]


class ProfileAdmin(admin.ModelAdmin):
    list_display = ["user", "mobile", "location"]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice, ChoiceAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Poll, PollAdmin)
admin.site.register(Vote, VoteAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.add_action(export_as_json, "export_as_json")
admin.site.add_action(export_as_csv, "export_as_csv")
admin.site.add_action(make_actived, "mark_actived")
