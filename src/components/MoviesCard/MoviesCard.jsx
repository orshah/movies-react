import "./moviesCard.style.css";
import React from "react";
import PropTypes from "prop-types";

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

MoviesCard.propTypes = {
  cardData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
};

export default MoviesCard;
