import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FilmsList = () => {
  // const dispatch = useDispatch();
  // const films = useSelector((state) => state.filmsReducer.films);

  return (
    <>
      <input name="film" placeholder="enter film" required />
      <button>Find film</button>
    </>
  );
};

export default FilmsList;
