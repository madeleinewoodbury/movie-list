import React, { useEffect, useContext, useState } from "react";
import MoviesContext from "../context/movies/moviesContext";

const Movie = ({ match }) => {
  const moviesContext = useContext(MoviesContext);
  const { getMovie, movie, addToWatchlist, loading } = moviesContext;

  useEffect(() => {
    getMovie(match.params.id);
  }, [match.params.id]);

  const [watched, toggleWatched] = useState(false);
  const [inList, toggleInList] = useState(false);

  const handleClick = (e) => {
    if (e.target.classList.contains("watched")) {
      toggleWatched(!watched);
    } else {
      if (!inList) {
        addToWatchlist(movie.imdbID);
      }
      toggleInList(!inList);
    }
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
                  className='btn btn-primary watched'
                  onClick={handleClick}
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
                  className='btn btn-secondary in-list'
                  onClick={handleClick}
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
