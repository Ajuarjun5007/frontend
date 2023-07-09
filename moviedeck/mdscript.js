// javascript code goes here
async function getMovies(){
    const response= await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f1a87d30ad8792e0dd1c12ce07d37337&language=en-US&page=1")
    const movieslist=await response.json();
    console.log(movieslist)
   }
