# Commands

### Prerequisites

Create the environment (creates a folder in your current directory)

```bash
virtualenv .venv
```

In Linux or Mac, activate the new python environment

```bash
source .venv/bin/activate
```

Or in Windows

```bash
source .venv/Scripts/activate
```

### Installing

Install `requirements.txt` file

```bash
pip install -r requirements.txt
```

Run server

```bash
py manage.py runserver
```

Run migrate again to create those model tables in database:

```bash
py manage.py migrate
```

Create super user

```bash
py manage.py createsuperuser --email="admin@gmail.com" --username="admin"
```

## Author

Copyright &copy; 2024 by [ZIN](http://www.github.com/losertowinner).
