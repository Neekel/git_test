const numberOfFilms = +prompt('How many films?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last film', ''),
      b = prompt('Your choice', ''),
      c = prompt('Last film', ''),
      d = prompt('Your choice', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
