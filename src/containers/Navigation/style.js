import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  z-index: 4000;
  position: fixed;
  top: 0;
  right: 20px;
`;
export const NavLinksContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;
export const Hamburger = styled.span`
  display: block;
  margin: 4px;
  height: 9px;
  width: 40px;
  background: white;
  border-radius: 9px;
  :hover {
    color:black
  }
`;
export const NavButton = styled.input.attrs((props) => ({
  type: props.type || "input",
}))`
  display: none;
  :checked {
    ~ #hamburger-icon span:nth-child(1) {
      transform: rotate(135deg) translate(21px, -13px);
    }
    ~ #hamburger-icon span:nth-child(2) {
      opacity: 0;
    }
    ~ #hamburger-icon span:nth-child(3) {
      transform: rotate(-135deg) translate(3px);
    }
  }
  }
`;