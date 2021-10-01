import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { movies } from "../actions/index";

const API_KEY = "9226d2cbb7ed48fe3f3e70d3c7574602";
const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

const Search = (props) => {
  const [query, setQuery] = useState("");

  const search = () => {
    console.log("Search button clicked", query);
    let url = `${BASE_URL}&language=en-US&page=1&include_adult=false&query=${query}`;

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonObj) => {
        props.movies(jsonObj.results);
      });
  };

  return (
    <div>
      <Form inline className="col-md-12 col-md-offset-4">
        <FormGroup>
          <FormLabel>Search </FormLabel>{" "}
          <FormControl
            type="text"
            placeholder="Search any movie"
            onChange={(event) => setQuery(event.target.value)}
          />{" "}
          <Button bsstyle="success" onClick={() => search()}>
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default connect(null, { movies })(Search);
