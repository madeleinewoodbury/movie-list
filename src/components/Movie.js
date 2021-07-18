import React, { useEffect, useContext, useState } from "react";
import MoviesContext from "../context/movies/moviesContext";

const Movie = ({ match }) => {
  // const moviesContext = useContext(MoviesContext);
  // const { getMovie, movie, loading } = moviesContext;

  // useEffect(() => {
  //   getMovie(match.params.id);
  // }, [match.params.id]);

  const loading = false;
  const [watched, toggleWatched] = useState(false);
  const [inList, toggleInList] = useState(false);

  const movie = {
    Title: "Titanic",
    Year: "1997",
    Rated: "PG-13",
    Released: "19 Dec 1997",
    Runtime: "194 min",
    Genre: "Drama, Romance",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
    Plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    Language: "English, Swedish, Italian, French",
    Country: "USA, Mexico, Australia, Canada",
    Awards: "Won 11 Oscars. Another 115 wins & 83 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    Metascore: "75",
    imdbRating: "7.8",
    imdbID: "tt0120338",
    BoxOffice: "$659,363,944",
    Production:
      "20th Century Fox, Lightstorm Entertainment, Paramount Pictures",
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {movie !== null ? (
        <>
          <h1 className='movie-title'>{movie.Title}</h1>
          <div className='title-info'>
            <span>{movie.Year}</span> |<span>{movie.Rated}</span> |
            <span>{movie.Runtime}</span> |<span>{movie.Genre}</span>
          </div>
          <div className='row mt-2'>
            <div className='col-4 poster-col'>
              <img src={movie.Poster} alt={`${movie.Title} poster`} />
              <div className='btn-container'>
                <button
                  className='btn btn-primary'
                  onClick={(e) => toggleWatched(!watched)}
                >
                  {watched ? (
                    <>
                      <i className='fas fa-check'></i> Watched
                    </>
                  ) : (
                    <>Not watched</>
                  )}
                </button>
                <button
                  className='btn btn-secondary'
                  onClick={(e) => toggleInList(!inList)}
                >
                  {inList ? (
                    <>
                      <i className='fas fa-list'></i> Remove
                    </>
                  ) : (
                    <>
                      <i className='fas fa-list'></i> Add
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className='col-8 info-col'>
              <span>
                <strong>Director:</strong> {movie.Director}
              </span>
              <span>
                <strong>Writer:</strong> {movie.Writer}
              </span>
              <span>
                <strong>Actors:</strong> {movie.Actors}
              </span>
              <span>
                <strong>Language:</strong> {movie.Language}
              </span>
              <span>
                <strong>Country:</strong> {movie.Country}
              </span>
              <span className='hide-md'>
                <strong>Awards:</strong> {movie.Awards}
              </span>
              <span className='hide-md'>
                <strong>Metascore:</strong> {movie.Metascore}
              </span>{" "}
              <span className='hide-md'>
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </span>
              <span className='hide-md'>
                <strong>Box office:</strong> {movie.BoxOffice}
              </span>{" "}
              <span className='hide-md'>
                <strong>Plot:</strong> {movie.Plot}
              </span>{" "}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Movie;
