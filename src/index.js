/*
GLOBAL VARIABLE DECLARATIONS
*/
let movieData;
let currentMovie;

/* 
SOLUTION TO CHALLENGE #1:
LOADING IMAGES INTO FRONTEND.
*/
fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(json => {
        movieData = json;
        movieData.forEach(movie => {
            renderMovieImageInBar(movie);
        })
    })

/*
HELPER FUNCTIONS
*/
const renderMovieImageInBar = (movie) => {
    let movieList = document.querySelector("#movie-list");
    let movieImage = document.createElement("img");

    movieImage.src = movie.image;
    movieList.appendChild(movieImage);
}