// javascript code goes here
// const movieslist=[]
const url="https://api.themoviedb.org/3/movie/top_rated?api_key=f1a87d30ad8792e0dd1c12ce07d37337&language=en-US&page=1"
let movieslist=[]
async function getMovies(){
    const response= await fetch(url)
     movieslist=await response.json();
//   console.log(movieslist)
    // return movieslist;
    createmoviecards(movieslist.results);
    }
getMovies()


let displaymovie = document.querySelector(".movie-container");
function createmoviecards(details){
    console.log(details)
    details.forEach((item) => {
        displaymovie.innerHTML+=
        ` <div class="movies">
        <div class="movieimg">
         <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="">
        </div>
        <div class="movie-details">
            <h3>${item.poster_path}</h3>
            <h4>1972</h4>
            <p>Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son,
            Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.</p>
        </div>
    </div> `
    });
}
