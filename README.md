# LMS with Flask, React, Postgrest and Continuous Integration

## Commands to create the workspace

Create variable to connect client(Next.js) to server(Flask).

`$ export REACT_APP_API_SERVICE_URL=http://localhost:5004`

Install images and create containers

`$ docker-compose up -d --build`

Create database and fill tables in the postgrest container

```
$ docker-compose exec api python manage.py recreate_db
$ docker-compose exec api python manage.py seed_db
```

Run tests in the server(Flask)

`$ docker-compose exec api python -m pytest "src/tests" -p no:warnings --cov="src"`

Run tests in the client(Next.js)

`$ In progress`

Domain | Description
------------ | -------------
http://localhost:3007  | Main page client
http://localhost:3007/users  | Get in navegator console, users from API
http://localhost:5004/ping | GET to test the server
http://localhost:5004/users | GET to test the users in the server
http://localhost:5004/doc | Doc of the server(API REST with Flask)
http://localhost:5004/admin | CMS
