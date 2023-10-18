import React from "react";
import NavBar from "./NavBar";
import "../styles/global.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <div className="content">{children}</div>
      <footer>Footer</footer>
    </div>
  );
}

export default Layout;
