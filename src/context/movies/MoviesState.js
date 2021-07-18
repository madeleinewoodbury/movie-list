import React, { useReducer } from "react";
import axios from "axios";
import MoviesContext from "./moviesContext";
import MoviesReducer from "./moviesReducer";

import { SEARCH_MOVIES, GET_MOVIE, SET_LOADING } from "../types";

const api = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const MoviesState = (props) => {
  const initalState = {
    movies: [],
    movie: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(MoviesReducer, initalState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  // Search movies by movie title
  const searchMovies = async (movie) => {
    setLoading();
    try {
      const res = await axios.get(`${api}&s=${movie}`);

      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.Search,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Get movie by imdbID
  const getMovie = async (id) => {
    setLoading();
    try {
      const res = await axios.get(`${api}&i=${id}`);

      dispatch({
        type: GET_MOVIE,
        payload: res.data,
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
        getMovie,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
