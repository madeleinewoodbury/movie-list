import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className='card poster-card text-white bg-dark my-2 p-0 col-md-3 col-sm-6'>
      <div className='card-header'>
        <Link to={`/movie/${movie.imdbID}`}>
          {movie.Title} ({movie.Year})
        </Link>
      </div>
      <div className='card-body p-0'>
        <Link to={`/movie/${movie.imdbID}`}>
          <img
            className='img-fluid'
            src={movie.Poster}
            alt={`${movie.Title} poster`}
          />
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
