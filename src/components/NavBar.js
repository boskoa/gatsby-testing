import { Link } from "gatsby";
import React from "react";

function NavBar() {
  return (
    <nav>
      <h1>NavBar</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}

export default NavBar;
