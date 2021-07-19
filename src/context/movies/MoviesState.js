import React, { useReducer } from "react";
import axios from "axios";
import MoviesContext from "./moviesContext";
import MoviesReducer from "./moviesReducer";

import {
  SEARCH_MOVIES,
  GET_MOVIE,
  SET_LOADING,
  ADD_TO_WATCHLIST,
} from "../types";

const api = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

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
      const my_watchlist = state.watchlist;
      const res = await axios.get(`${api}&i=${id}`);

      const movie = {
        Title: res.data.Title,
        Year: res.data.Year,
        Poster: res.data.Poster,
        imdbID: res.data.imdbID,
      };

      if (
        my_watchlist.filter((item) => item.imdbID === movie.imdbID).length > 0
      ) {
        console.log("Remove from watchlist");
      } else {
        console.log("Add to watchlist");
        my_watchlist.push(movie);
        localStorage.setItem("watchlist", JSON.stringify(my_watchlist));
      }

      dispatch({
        type: ADD_TO_WATCHLIST,
        payload: my_watchlist,
      });
    } catch (error) {
      console.log(error);
    }
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
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
