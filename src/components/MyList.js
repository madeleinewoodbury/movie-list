import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MoviesContext from "../context/movies/moviesContext";

const MyList = () => {
  const moviesContext = useContext(MoviesContext);
  const { watchlist } = moviesContext;
  return (
    <div>
      <h1>My Watchlist</h1>
      {watchlist.length > 0 ? (
        <div className='container'>
          {watchlist.map((movie) => (
            <Link
              key={movie.imdbID}
              className='watchlist-div bg-dark my-2'
              to={`/movie/${movie.imdbID}`}
            >
              <img
                className='watchlist-img'
                src={movie.Poster}
                alt={`${movie.Title} poster`}
              />
              <div>
                <h3>{movie.Title}</h3>

                <span>{movie.Year}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>You have not added any movies yet</p>
      )}
    </div>
  );
};

export default MyList;
