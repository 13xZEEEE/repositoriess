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
//
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '')
//
//
// personalMovieDB.movie[a] = b
// personalMovieDB.movie[c] = d


for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '')
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movie[a] = b
                console.log('done')
        } else  {
                console.log('error')
                i--
        }

}


if (personalMovieDB.count < 10) {
        console.log('мало')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('киноман')
} else {
        console.log('ошибка')
}









console.log(personalMovieDB)