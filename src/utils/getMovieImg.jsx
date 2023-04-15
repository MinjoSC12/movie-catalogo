import craneo from "../img/craneo.png"
export function getMovieImg(path,width){
    return path? `https://image.tmdb.org/t/p/w${width}${path}`:craneo
}
//const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;