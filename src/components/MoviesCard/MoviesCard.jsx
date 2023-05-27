import "./moviesCard.style.css";

import React from "react";

function MoviesCard(props) {
  const { title, genre, picture, tootlip, tootlipImg, tootlipText } =
    props.cardData;
  return (
    <li className="needToAlign">
      <img src={picture} alt="" />
      <p className="title">{title}</p>
      <p clasName="genre">{genre}</p>
      <div className="mytooltip tooltip-effect-1">
        <article className="tooltip-item">{tootlip}</article>
        <span className="tooltip-content clearfix">
          <img src={tootlipImg} />
          <span className="tooltip-text">{tootlipText}</span>
        </span>
      </div>
    </li>
  );
}

export default MoviesCard;
