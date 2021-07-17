export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SEARCH_MOVIES":
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    default:
      return state;
  }
};
