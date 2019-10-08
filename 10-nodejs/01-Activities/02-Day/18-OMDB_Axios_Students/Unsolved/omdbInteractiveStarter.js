// INSTRUCTIONS:

var axios= require("axios");
var movieName= process.argv[2];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created
axios.get(queryUrl).then( function(response){
    console.log()
})
// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// ...


// Grab or assemble the movie name and store it in a variable called "movieName"
// ...


// Then run a request with axios to the OMDB API with the movie specified



// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request with axios to the queryUrl
// ...

// If the request with axios is successful
// ...

// Then log the Release Year for the movie
// ...
