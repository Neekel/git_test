const numberOfFilms = +prompt('How many films?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 3; i++) {
    const a = prompt('Last film', ''),
      b = prompt('Your choice', '');
    personalMovieDB.movies[a] = b;
}


console.log(personalMovieDB);
