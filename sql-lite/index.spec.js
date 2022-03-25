let SQLEngine = require("./index");

const database = {
  movies: [
    { id: 1, title: "The Matrix", cert: 15 },
    { id: 2, title: "Titanic", cert: 12 },
    { id: 3, title: "Alien", cert: 18 },
  ],
  actors_in_movies: [
    { actorID: 1, movieID: 1 },
    { actorID: 2, movieID: 1 },
    { actorID: 3, movieID: 2 },
    { actorID: 4, movieID: 3 },
  ],
  actors: [
    { id: 1, name: "Keanu Reeves" },
    { id: 2, name: "Carrie-Anne Moss" },
    { id: 4, name: "Sigourney Weaver" },
  ],
};

describe("test SQLEngine class", () => {
  test("constructor works", () => {
    let engine = new SQLEngine(database);
    expect(engine).toBeInstanceOf(SQLEngine);
  });
  test("SELECT * FROM movies", () => {
    let engine = new SQLEngine(database);
    let result = engine.execute("SELECT * FROM movies");
    let expected = database.movies;
    expect(result).toEqual(expected);
  });
  test("SELECT title FROM movies", () => {
    let engine = new SQLEngine(database);
    let result = engine.execute("SELECT title FROM movies");
    let expected = database.movies.map((movie) => ({ title: movie.title }));
    expect(result).toEqual(expected);
  });
  test("SELECT id, title FROM movies", () => {
    let engine = new SQLEngine(database);
    let result = engine.execute("SELECT id, title FROM movies");
    let expected = database.movies.map((movie) => ({
      title: movie.title,
      id: movie.id,
    }));
    expect(result).toEqual(expected);
  });
//   test("SELECT title FROM movies WHERE id=1", () => {
//     let engine = new SQLEngine(database);
//     let result = engine.execute("SELECT title FROM movies WHERE id=1");
//     let expected = database.movies
//       .filter((movie) => movie.id === 1)
//       .map((movie) => ({ title: movie.title }));
//     expect(result).toEqual(expected);
//   });
//   test("SELECT title FROM movies WHERE cert >=15", () => {
//     let engine = new SQLEngine(database);
//     let result = engine.execute("SELECT title FROM movies WHERE cert >=15");
//     let expected = database.movies
//       .filter((movie) => movie.cert >= 15)
//       .map((movie) => ({ title: movie.title }));
//     expect(result).toEqual(expected);
//   });
//   test('SELECT id FROM actors WHERE name = "Keanu Reeves"', () => {
//     let engine = new SQLEngine(database);
//     let result = engine.execute(
//       'SELECT id FROM actors WHERE name = "Keanu Reeves"'
//     );
//     let expected = database.actors
//       .filter((actor) => actor.name === "Keanu Reeves")
//       .map((actor) => ({ id: actor.id }));
//     expect(result).toEqual(expected);
//   });
});
