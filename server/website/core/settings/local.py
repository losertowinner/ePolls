from .base import *

ALLOWED_HOSTS = ["*"]

INTERNAL_IPS = ["*"]

# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "epolls.db",
    }
}
