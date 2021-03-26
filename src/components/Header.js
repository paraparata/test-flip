import React from "react";

function Header({ title }) {
  return (
    <header>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
    </header>
  );
}

export default Header;
