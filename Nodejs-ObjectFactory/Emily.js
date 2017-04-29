var movies = require('./movie'); //gets object from movie.js

//movies.favMovie = "The Notebook";
//console.log("Emily favMovie is " + movies.favMovie);

//instead

var emilysMovies = movies(); 
//Calls the function that was was referred by the variable 'movie'(i.e the imported function).
//This function returns an object {favMovie:" "}, this is basically key:value pair notation.
//This returned object gets stored in the variable arnavsMovie.

emilysMovies.favMovie = "The Notebook";
console.log("Emily favMovie is " + emilysMovies.favMovie);