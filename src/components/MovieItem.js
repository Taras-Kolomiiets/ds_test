import React from "react";
import { connect } from "react-redux";

const urlComponent = "https://image.tmdb.org/t/p/w342";
const movieUrl = "https://www.themoviedb.org/movie/";

const MovieItem = (props) => {
  return (
    <div className="col-sm-12 col-sm-3">
      <div className="thumbnail">
        <a href={movieUrl + props.movie.id} target="_blank" rel="noreferrer">
          <img
            src={urlComponent + props.movie.poster_path}
            alt={props.movie.title + " Image"}
          />
        </a>
        <div className="caption">
          <h3>{props.movie.title}</h3>
          <p>{props.movie.overview}</p>
          <p>Release Date - {props.movie.release_date}</p>
          <p>
            Ratings -{" "}
            <span className="badge badge-default">
              <span
                className="glyphicon glyphicon-star"
                aria-hidden="true"
              ></span>{" "}
              {props.movie.vote_average}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect(null, null)(MovieItem);
