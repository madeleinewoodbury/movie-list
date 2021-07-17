import React, { useReducer } from "react";
import axios from "axios";
import MoviesContext from "./moviesContext";
import MoviesReducer from "./moviesReducer";

const api = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const MoviesState = (props) => {
  const initalState = {
    movies: [],
    movie: {},
    loading: true,
  };

  const [state, dispatch] = useReducer(MoviesReducer, initalState);

  // Search movies
  const searchMovies = async (movie) => {
    const res = await axios.get(`${api}&t=${movie}`);
    console.log(res.data);

    dispatch({
      type: "SEARCH_MOVIES",
      payload: res.data,
    });
  };

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        loading: state.loading,
        searchMovies,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
