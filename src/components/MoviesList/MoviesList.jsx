import "./moviesList.style.css";
import React from "react";
import { movData } from "./MoviesData";
import MoviesCard from "../MoviesCard/MoviesCard";
import Tootlips from "../Tootlips/Tootlips";

function MoviesList() {
  const showMoviesList = movData.map((el, index) => {
    return (
      <div key={index}>
        <MoviesCard cardData={el} />
        <Tootlips tootlipData={el} />
      </div>
    );
  });
  return <ul className="listMovies">{showMoviesList}</ul>;
}

export default MoviesList;
