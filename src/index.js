/* 
👁️‍🗨️ SOLUTION TO CHALLENGE #1:
🎞️ LOADING IMAGES INTO FRONTEND.
*/

/*
📝 PSEUDOCODE FOR CHALLENGE #1:
    • Fetch data from JSON database object. 🐕
    • Then, JSONify the data. 🔎
    • Then, iterate through movies (data) and render each image in HTML. 🎥
    • To render each movie... 🎬
        -> Select region on HTML for loading movie images (#movie-list). ⽥
        -> Create an element for each image. ⚽️
        -> Update the image link (src) for each image. 🔗
        -> Add/append the updated image element to the image-loading region. 🖇️
*/

// Fetch data from JSON database object
fetch("http://localhost:3000/movies")
    // JSONify the data
    .then(response => response.json())
    // Iterate through movies and render to HTML
    .then(movies => {
        movies.forEach(movie => {
            renderMovieImageInBar(movie);
        })
    })

/*
HELPER FUNCTIONS:
RENDERING MOVIE IMAGES IN THE NAV-BAR
*/
const renderMovieImageInBar = (movie) =>{
    // Track region for loading movie images
    let movieList = document.querySelector("#movie-list");
    // Create new element for loading movie image
    let movieImage = document.createElement("img");

    // Update movie image link to local image file path
    movieImage.src = movie.image;
    // Add movie image element to loading region
    movieList.appendChild(movieImage);
}