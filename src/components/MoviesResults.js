import React from "react";
import Search from "./Search";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";

const MoviesResults = (props) => {
  console.log(props);
  return (
    <div>
      <Search />
      {props.movies.map((item) => {
        return <MovieItem movie={item} key={item.id} showButton={true} />;
      })}
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    movies: state.movies,
  };
}

export default connect(mapStateToProps, null)(MoviesResults);
