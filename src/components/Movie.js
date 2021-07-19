import React, { useEffect, useContext, useState } from "react";
import MoviesContext from "../context/movies/moviesContext";

const Movie = ({ match }) => {
  const moviesContext = useContext(MoviesContext);
  const {
    getMovie,
    movie,
    addToWatchlist,
    removeFromWatchlist,
    watchlist,
    loading,
  } = moviesContext;

  useEffect(() => {
    getMovie(match.params.id);
  }, [match.params.id]);

  const [inList, toggleInList] = useState(
    watchlist.find((item) => item.imdbID === match.params.id)
  );

  const handleClick = (e) => {
    if (!inList) {
      addToWatchlist(movie.imdbID);
    } else {
      removeFromWatchlist(movie.imdbID);
    }
    toggleInList(!inList);
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
                  className={
                    inList
                      ? "btn btn-danger in-list"
                      : "btn btn-secondary in-list"
                  }
                  onClick={handleClick}
                >
                  {inList ? (
                    <>
                      <i className='fas fa-list'></i> Remove from watchlist
                    </>
                  ) : (
                    <>
                      <i className='fas fa-list'></i> Add to watchlist
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
