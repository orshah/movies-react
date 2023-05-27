import "./tootlips.style.css";
import PropTypes from "prop-types";
import React from "react";

function Tootlips(props) {
  const { tootlip, tootlipImg, tootlipText } = props.tootlipData;

  return (
    <div className="mytooltip tooltip-effect-1">
      <article className="tooltip-item">{tootlip}</article>
      <span className="tooltip-content clearfix">
        <img src={tootlipImg} alt="" />
        <span className="tooltip-text">{tootlipText}</span>
      </span>
    </div>
  );
}

Tootlips.propTypes = {
  tootlipData: PropTypes.shape({
    tootlip: PropTypes.string.isRequired,
    tootlipImg: PropTypes.string.isRequired,
    tootlipText: PropTypes.string.isRequired,
  }),
};

export default Tootlips;
