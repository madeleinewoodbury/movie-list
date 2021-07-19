import React, { useContext } from "react";
import MoviesContext from "../context/movies/moviesContext";
import MovieCard from "./MovieCard";
import SearchForm from "./SearchForm";
import Spinner from "./Spinner";

const Home = () => {
  const moviesContext = useContext(MoviesContext);
  const { searchMovies, movies, loading } = moviesContext;

  const handleSearch = (movie) => {
    searchMovies(movie);
  };
  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      {loading && <Spinner />}
      <div className='container'>
        {movies.length > 0 && (
          <div className='row'>
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
