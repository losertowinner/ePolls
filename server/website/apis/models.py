from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib import admin
from django.utils.html import mark_safe


class User(AbstractUser):
    email = models.EmailField(
        max_length=100,
        unique=True,
        help_text="Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.",
    )
    avatar = models.ImageField(
        upload_to="avatars/%Y/%m/%d/",
        default=None,
        null=True,
        blank=True,
        help_text="Upload avatar of the user",
    )
    reset_code = models.CharField(max_length=7, null=True, blank=True, unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    @admin.display(description="Preview")
    def avatar_preview(self):
        if self.avatar:
            return mark_safe(
                f'<img src="{self.avatar.url}" alt="{self.username}" width="80" height="80" class="img-thumbnail rounded-circle shadow" />'
            )

    def __str__(self):
        return self.username


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    mobile = models.CharField(max_length=15, blank=True)
    location = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.user.username


class Common(models.Model):
    is_active = models.BooleanField(
        default=True,
        verbose_name="Active",
        help_text="Designates whether this object should be treated as active. Unselect this instead of deleting objects.",
    )
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ["id", "-date_created"]


class SlugModel(Common):
    slug = models.SlugField(
        default="",
        null=False,
        verbose_name="URL",
        help_text="A short label, generally used in URLs.",
        unique=True,
    )

    class Meta(Common.Meta):
        abstract = True
        ordering = Common.Meta.ordering + ["title"]


class Category(SlugModel):
    title = models.CharField(max_length=75, unique=True)

    class Meta(SlugModel.Meta):
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.title


class Tag(SlugModel):
    title = models.CharField(max_length=75, unique=True)

    def __str__(self):
        return self.title


class Base(models.Model):
    tags = models.ManyToManyField(Tag, blank=True)

    class Meta:
        abstract = True
        ordering = ["id"]


class Poll(SlugModel, Base):
    categories = models.ManyToManyField(Category, blank=True)

    title = models.CharField(max_length=75)
    description = models.TextField()
    published_date = models.DateTimeField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

    @admin.display(description="Questions")
    def questions(self):
        return self.question_set.count()

    def __str__(self):
        return self.title


class Question(Common):
    poll = models.ForeignKey(Poll, on_delete=models.SET_NULL, null=True)

    title = models.CharField(max_length=75, unique=True)

    def __str__(self):
        return self.title


class Choice(Common):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)

    content = models.TextField()

    @admin.display(description="Votes")
    def votes(self):
        return self.vote_set.count()

    def __str__(self):
        return f"{self.content} - {self.question.title}"


class Vote(Common):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    choice = models.ForeignKey(Choice, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("user", "choice")

    def __str__(self):
        return f"{self.user.username} voted for {self.choice.content} on {self.date_created}"
