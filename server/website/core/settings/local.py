from .base import *

ALLOWED_HOSTS = ["*"]

INTERNAL_IPS = ["*"]

# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": path.join(path.join(BASE_DIR, "database"), environ.get("DB_NAME")),
    }
}
