import "./moviesCard.style.css";
import React from "react";

function MoviesCard(props) {
  const { title, genre, picture } = props.cardData;
  return (
    <li className="movie-container">
      <img src={picture} alt="" />
      <p className="title">{title}</p>
      <p className="genre">{genre}</p>
    </li>
  );
}

export default MoviesCard;
