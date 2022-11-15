// let incr = 10,
//     decr = 10;
//
// // ++incr
// // --decr
//
// console.log(incr)
// console.log (decr)











const numberOfFilms = +prompt('сколько фильмов вы просмотрели?', '')

const personalMovieDB = {
        count: numberOfFilms,
        movie: {},
        actors: {},
        genres: [],
        privat: false
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '')


personalMovieDB.movie[a] = b
personalMovieDB.movie[c] = d


console.log(personalMovieDB)