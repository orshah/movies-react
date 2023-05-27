import "./tootlips.style.css";

import React from "react";

function Tootlips(props) {
  const { tootlip, tootlipImg, tootlipText } = props.tootlipData;

  return (
    <div className="mytooltip tooltip-effect-1">
      <article className="tooltip-item">{tootlip}</article>
      <span className="tooltip-content clearfix">
        <img src={tootlipImg} />
        <span className="tooltip-text">{tootlipText}</span>
      </span>
    </div>
  );
}

export default Tootlips;
