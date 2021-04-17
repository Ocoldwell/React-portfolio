import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavLinksContainer, Hamburger, NavButton } from "./style.js";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Nav>
      <NavButton onClick={handleToggle} type="checkbox" id="nav-button" />
      <label id="hamburger-icon" for="nav-button">
        <Hamburger />
        <Hamburger />
        <Hamburger />
      </label>
      {toggle ? (
        <NavLinksContainer>
          <Link to="/">Ollie Coldwell</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </NavLinksContainer>
      ) : null}
    </Nav>
  );
};

export default Navigation;
