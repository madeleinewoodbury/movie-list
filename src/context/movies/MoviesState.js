import React, { useReducer } from "react";
import axios from "axios";
import MoviesContext from "./moviesContext";
import MoviesReducer from "./moviesReducer";

import {
  SEARCH_MOVIES,
  GET_MOVIE,
  SET_LOADING,
  UPDATE_WATCHLIST,
} from "../types";

const api = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const MoviesState = (props) => {
  const initalState = {
    movies: [],
    movie: {},
    watchlist: localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : [],
    loading: false,
  };

  const [state, dispatch] = useReducer(MoviesReducer, initalState);

  const setLoading = () => dispatch({ type: SET_LOADING });

  // Fetch movie from api and add to watchlist
  const addToWatchlist = async (id) => {
    setLoading();
    try {
      const res = await axios.get(`${api}&i=${id}`);

      const movie = {
        Title: res.data.Title,
        Year: res.data.Year,
        Poster: res.data.Poster,
        imdbID: res.data.imdbID,
      };

      const my_watchlist = state.watchlist;
      my_watchlist.push(movie);
      localStorage.setItem("watchlist", JSON.stringify(my_watchlist));

      dispatch({
        type: UPDATE_WATCHLIST,
        payload: my_watchlist,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Remove movie from watchlist
  const removeFromWatchlist = (id) => {
    setLoading();

    const my_watchlist = state.watchlist.filter((movie) => movie.imdbID !== id);

    localStorage.setItem("watchlist", JSON.stringify(my_watchlist));

    dispatch({
      type: UPDATE_WATCHLIST,
      payload: my_watchlist,
    });
  };

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
        watchlist: state.watchlist,
        loading: state.loading,
        searchMovies,
        getMovie,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
