import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

import { useDarkMode } from "../../assets/DarkModeContext";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [thisPage, setThisPage] = useState();

  function page() {
    if (thisPage == true) {
      setThisPage(false);
    } else {
      setThisPage(true);
    }
  }

  return (
    <div className={isDarkMode ? "dark-header" : "Header"}>
      <div className="logo">
        <img className="logo-q" src="CD.png" alt="logo" />
      </div>
      <div className="header-right">
        {thisPage ? (
          <NavLink to="/" onClick={page}>
            <button>Home</button>
          </NavLink>
        ) : (
          <NavLink to="/addcar" onClick={page}>
            <button>Add Car</button>
          </NavLink>
        )}
      </div>
    </div>
  );
}
