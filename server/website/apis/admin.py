from django.contrib import admin

from .models import Question, Choice, Category, Poll, Vote, Tag
from .inlines import QuestionInline, ChoiceInline, VoteInline, TagPollInline


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


admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice, ChoiceAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Poll, PollAdmin)
admin.site.register(Vote, VoteAdmin)
admin.site.register(Tag, TagAdmin)
