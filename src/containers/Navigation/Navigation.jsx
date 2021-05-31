import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavLinksContainer, Logo } from "./style.js";
import Burger from '@animated-burgers/burger-rotate';
import '@animated-burgers/burger-rotate/dist/styles.css'


const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    toggle ? e.target.classList.remove('open'): e.target.classList.add('open')
    setToggle(!toggle);
  };

  return (
    <Nav>
      <Logo>Ollie Coldwell.</Logo>
      {/* <Burger onClick={handleToggle}/>
      {toggle ? (
        <NavLinksContainer>
          <Logo>Ollie Coldwell.</Logo>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </NavLinksContainer>
      ) : null} */}
    </Nav>
  );
};

export default Navigation;
