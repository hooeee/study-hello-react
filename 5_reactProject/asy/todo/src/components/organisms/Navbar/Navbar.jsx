import React from "react";
import { default as IconButton } from "../../atoms/iconButton/IconButton";
import {
  StyledNavbar,
  LeftDiv,
  RightDiv,
  InnerDiv,
  NavbarLinkContainer,
} from "./style";
import { faBars, faCoffee } from "@fortawesome/free-solid-svg-icons";
const Navbar = (props) => {
  return (
    <StyledNavbar>
        <LeftDiv>
          <NavbarLinkContainer>
            <IconButton icon={faCoffee} />

          </NavbarLinkContainer>
        </LeftDiv>
        <RightDiv>
          <NavbarLinkContainer>
            <IconButton icon={faCoffee} />
            <IconButton icon={faCoffee} />
          </NavbarLinkContainer>
        </RightDiv>
    </StyledNavbar>
  );
};

export default Navbar;
