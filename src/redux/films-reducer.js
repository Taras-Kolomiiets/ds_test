const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default filmsReducer;
