import React from "react";
import { default as IconButton } from "../../atoms/iconButton/IconButton";
import {
  StyledNavbar,
  LeftDiv,
  RightDiv,
  InnerDiv,
  NavbarLinkContainer,
} from "./style";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Navbar = (props) => {
  return (
    <StyledNavbar>
      <InnerDiv>
        <LeftDiv>
          <NavbarLinkContainer>
            <IconButton icon={faCoffee} />
            <IconButton icon={faCoffee} />
          </NavbarLinkContainer>
        </LeftDiv>
      </InnerDiv>
      <InnerDiv>
        <RightDiv>
          <NavbarLinkContainer>
            <IconButton icon={faCoffee} />
            <IconButton icon={faCoffee} />
          </NavbarLinkContainer>
        </RightDiv>
      </InnerDiv>
    </StyledNavbar>
  );
};

export default Navbar;
