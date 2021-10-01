const GET_FILMS = "GET_FILMS";

const initialState = {
  films: [],
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS: {
      return { ...state, films: [...action.films] };
    }
    default:
      return state;
  }
};

export default filmsReducer;
