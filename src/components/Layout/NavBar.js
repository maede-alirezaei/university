import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div>{"دانشگاه علامه طباطبایی"}</div>
      <nav>
        <ul>
          <li>
            <Link to="/">{"خانه"}</Link>
          </li>
          <li>
            <Link to="/achievements">{"دستاوردها"}</Link>
          </li>
          <li>
            <Link to="/favourites">{"موردعلاقه ها"}</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
};

export default NavBar;
