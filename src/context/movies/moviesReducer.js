import {
  SEARCH_MOVIES,
  GET_MOVIE,
  SET_LOADING,
  ADD_TO_WATCHLIST,
} from "../types";

export default (state, action) => {
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
    case ADD_TO_WATCHLIST:
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
