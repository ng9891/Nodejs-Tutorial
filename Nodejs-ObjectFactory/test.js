require('./Emily');
require('./Bucky');

// OUTPUT
/*
Emily favMovie is The Notebook
Bucky favMovie is The Notebook
*/
//Essentially, Emily and Bucky are using the reference
//of the movie.js module, they call it share state of module.
//so you need to create object factory so each emily and bucky objects
//get their own copy of the function