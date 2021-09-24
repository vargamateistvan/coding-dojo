# The Task

The goal is to implement a simple SQL Engine. The "database" will be passed as an object, and you can run queries.

These SQL queries should work:

- SELECT * FROM movies
- select id, title from movies
- SELECT title FROM movies WHERE id=1
- SELECT title FROM movies WHERE cert >=15
- SELECT id FROM actors WHERE name = "Keanu Reeves"
- SELECT title FROM movies WHERE cert >= 18 OR title = 'Titanic'