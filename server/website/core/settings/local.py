from .base import *

ALLOWED_HOSTS = ["*"]

INTERNAL_IPS = ["*"]

CORS_ALLOW_ALL_ORIGINS = True

# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": environ.get("DB_NAME"),
        "USER": environ.get("DB_USER"),
        "PASSWORD": environ.get("DB_PASSWORD"),
    }
}
