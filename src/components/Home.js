import React, { useContext } from "react";
import MoviesContext from "../context/movies/moviesContext";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

const Home = () => {
  const moviesContext = useContext(MoviesContext);
  const { searchMovies, movies, loading } = moviesContext;

  const handleSearch = (movie) => {
    searchMovies(movie);
  };
  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      <SearchResult />
    </div>
  );
};

export default Home;
