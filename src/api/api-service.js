import axios from "axios";

const API_KEY = "9226d2cbb7ed48fe3f3e70d3c7574602";
const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

export const getFilms = (query = "") => {
  return axios
    .get(`${BASE_URL}&query=${query}`)
    .then((response) => console.log(response.data));
};
