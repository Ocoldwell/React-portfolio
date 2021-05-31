import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavLinksContainer } from "./style.js";
import Burger from '@animated-burgers/burger-rotate';
import '@animated-burgers/burger-rotate/dist/styles.css'


const Navigation = () => {
  // const [toggle, setToggle] = useState(false);

  // const handleToggle = (e) => {
  //   toggle ? e.target.classList.remove('open'): e.target.classList.add('open')
  //   setToggle(!toggle);
  // };

  return (
    <Nav>
      {/* <Burger onClick={handleToggle}/>
      {toggle ? (
        <NavLinksContainer>
          <Link to="/">Ollie Coldwell</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </NavLinksContainer>
      ) : null} */}
    </Nav>
  );
};

export default Navigation;
