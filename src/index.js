/* 
👁️‍🗨️ SOLUTIONS TO CHALLENGE #1-3:

🎞️ LOADING IMAGES INTO FRONTEND.
🌆 DISPLAYING FIRST MOVIE DETAIL CARD WITH LARGER IMAGE.
🖱️ ENABLE MOVIE DETAIL CARD RENDERING ON CLICK AND WATCH STATUS BUTTON TOGGLE.
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

📝 PSEUDOCODE FOR CHALLENGE #2:
    • Extend the initial fetch request since we're loading everything at once. 🖥️
    • Load first movie's details and larger image after fetch. 🥞
    • To load movie details and larger image... 📸
        -> Individually identify all unique properties of movie object data and save to variables. 🧮
        -> Set each unique movie property to the relevant attribute of created HTML elements. 🧶

📝 PSEUDOCODE FOR CHALLENGE #3:
    • Create event handler in rendering function to handle navbar icon clicks.
    • On click event, reload image card with new details.
*/

/*
GLOBAL VARIABLE DECLARATIONS:
    -> `currentMovie`: Currently loaded movie for detail card.
*/
let currentMovie;

/*
GET REQUEST TO LOAD PAGE WITH MOVIE DATA.
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

        // Load first movie details and larger image on page (re)load
        showMovieDetail(movies[0]);

        // "Activate" functionality of watched status button on current movie detail card
        enableWatchedStatusButton();
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

    // Load new movie card for most recently clicked movie with relevant details
    movieImage.addEventListener("click", () => {
        showMovieDetail(movie);
    })
}

/*
HELPER FUNCTIONS:
DISPLAY MOVIE CARD AND INFO FOR GIVEN MOVIE
*/
const showMovieDetail = (movie) => {
    currentMovie = movie;

    // Define variables for all additional movie details and properties. ✍🏽
    let detailTitle = document.querySelector("#title");
    let detailImage = document.querySelector("#detail-image");
    let detailDescription = document.querySelector("#description");
    let detailYearReleased = document.querySelector("#year-released");
    let watchedStatusButton = document.querySelector("#watched");
    let bloodAmount = document.querySelector("#amount");

    // Set all HTML card attributes to relevant properties from movie object data. 🪡
    detailTitle.textContent = currentMovie.title;
    detailImage.src = currentMovie.image;
    detailDescription.textContent = currentMovie.description;
    detailYearReleased.textContent = currentMovie.release_year;
    watchedStatusButton.textContent = currentMovie.watched ? "Watched" : "Unwatched"
    bloodAmount.textContent = currentMovie.blood_amount;
}

/*
HELPER FUNCTIONS:
ACTIVATE WATCHED STATUS BUTTON FUNCTIONALITY FOR CURRENTLY LOADED MOVIE CARD.
*/
const enableWatchedStatusButton = () => {
    // Get HTML element for toggle-able watch status button
    let watchedStatusButton = document.querySelector("#watched");

    // Create on-click event listener to handle toggling
    watchedStatusButton.addEventListener("click", () => {
        // Toggle on/off for new button status
        currentMovie.watched = !currentMovie.watched;

        // Update button's text content to reflect newly toggled watch status
        watchedStatusButton.textContent = currentMovie.watched ? "Watched" : "Unwatched";
    })
}