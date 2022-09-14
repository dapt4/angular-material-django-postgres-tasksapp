# angular-material-django-postgres-tasksapp

first create your virtualenv

`$ cd django_tasksapp`

`$ python3 -m venv venv`

activate venv

`$ source venv/bin/activate`

then install requeriments

`$ pip install -r requirements.txt`

install postgresql, login and create the database

`CREATE DATABASE <yourDBname>;`

create a .env file in the root folder

`$ touch .env`

and add your postgresql credentials and the app SECRET_KEY to .env file

>ENV_SECRET_KEY="{add a secret key like bhajfbkjhawbdkjhabdjh}"\
ENV_NAME='{yourDBname}'\
ENV_HOST='{your host or localhost}'\
ENV_PORT='{your db port or 5432}'\
ENV_USER='{your db user}'\
ENV_PASSWORD='{your db password}'

run the command:
`python manage.py migrate`

finally the project run with: 

`$ python manage.py runserver`

open your browser or your REST Client in: 

`GET POST localhost:8000/task`\
`GET PUT DELETE localhost:8000/task/<id>`

active the frontend with:

`cd ../angular`\
`ng serve`

open the browser in:

`localhost:4200`
