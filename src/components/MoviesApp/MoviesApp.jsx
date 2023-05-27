import "./moviesApp.style.css";
import Navigation from "../Navigation/Navigation";
import MoviesList from "../MoviesList/MoviesList";

import React from "react";

function MoviesApp() {
  return (
    <>
      <Navigation />
      <main className="container-main">
        <MoviesList />
      </main>
    </>
  );
}

export default MoviesApp;
