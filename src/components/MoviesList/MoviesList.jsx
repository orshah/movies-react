import "./moviesList.style.css";
import React from "react";
import { movData } from "./MoviesData";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesList() {
  const showMoviesList = movData.map((el, index) => {
    return <MoviesCard cardData={el} key={index} />;
  });
  return <ul className="listMovies">{showMoviesList}</ul>;
}

export default MoviesList;
