import "./navigation.style.css";

import React from "react";

function Navigation() {
  return (
    <div>
      {" "}
      <nav className="navigation">
        <p className="logo">Geekflix</p>
        <ul className="top-menu">
          <li>
            <a href="#">Headlines</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li className="active">
            <a href="#">Movies & Films</a>
          </li>
          <li>
            <a href="#">Television</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Celebrities</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
