import React, { useReducer } from "react";
import axios from "axios";
import MoviesContext from "./moviesContext";
import MoviesReducer from "./moviesReducer";

const api = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const MoviesState = (props) => {
  const initalState = {
    movies: [],
    movie: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(MoviesReducer, initalState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Search movies
  const searchMovies = async (movie) => {
    setLoading();
    try {
      const res = await axios.get(`${api}&s=${movie}`);

      dispatch({
        type: "SEARCH_MOVIES",
        payload: res.data.Search,
      });
    } catch (error) {
      console.log(error);
    }
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
