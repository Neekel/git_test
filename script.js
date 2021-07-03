const numberOfFilms = +prompt('How many films?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Last film', ''),
      b = prompt('Your choice', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
        personalMovieDB.movies[a] = b;
        console.log("done");
    }
    else {
        console.log("error");
        i--;
    }    
}

if (personalMovieDB.count < 10 ) {
    console.log("1");
}
else if (10 < personalMovieDB.count < 30) {
    console.log("2");
}
else 
    console.log("3");

console.log(personalMovieDB);
