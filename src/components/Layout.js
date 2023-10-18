import React from "react";
import NavBar from "./NavBar";

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
