import { useMovieGenerator } from "./useMovieGenerator";

export default function MapPractice2() {
    const [movies, regenerate] = useMovieGenerator();
    // console.log("movies", movies);

    return (
        <div className="mapPractice">
            <h2>Pamela's Movie List</h2>
            <button onClick={regenerate}>Click to see a different movie</button>
            <div className="movieList">
                {movies.map( (movie) => {
                    return (
                        <div className="movieList">
                            <h3 className="title">{movie.title}</h3>
                            <span>Starring: {movie.star}</span>
                            <span>Genre: {movie.genre}</span>
                            <span>Iconic quote: {movie.quote}</span>
                        </div>   
                    )
                }
            )}
            </div>
        </div>
    );
}

