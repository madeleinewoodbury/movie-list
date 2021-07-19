import {
  SEARCH_MOVIES,
  GET_MOVIE,
  SET_LOADING,
  UPDATE_WATCHLIST,
} from "../types";

const moviesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: payload,
        loading: false,
      };
    case UPDATE_WATCHLIST:
      return {
        ...state,
        watchlist: payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default moviesReducer;
