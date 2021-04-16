import React, { useState } from "react";
import { LinkContainer } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  z-index: 4000;
  position: fixed;
  top: 0;
  right: 20px;
`
const NavLinksContainer = styled.ul`
  list-style-type: none;
`

const Button = styled.button`

`

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Nav >
      <button onClick={handleToggle}>
        <FaAlignRight />
      </button>
      <NavLinksContainer>
        <li href="#">Ollie Coldwell</li>
        <li href="#">About Me</li>
        <li href="#">Projects</li>
        <li href="#">Contact</li>
      </NavLinksContainer>
    </Nav>
  );
};

export default Navigation;
