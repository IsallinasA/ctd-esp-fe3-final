import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { toggleTheme } = useContext(ContextGlobal);

  return (
    <nav>
      <span>
        <Link to="/">DH Odonto</Link>
      </span>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
      </div>
      <button
        className="favButton"
        onClick={() => toggleTheme({ type: "TOGGLE_THEME" })}
      >
        Change theme
      </button>
    </nav>
  );
};

export default Navbar;
