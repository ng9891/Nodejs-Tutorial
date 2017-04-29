var movies = require('./movie');

//movies.favMovie = "The Notebook";
var buckysMovies = movies();
buckysMovies.favMovie = "The Intern";

console.log("Bucky favMovie is " + buckysMovies.favMovie);