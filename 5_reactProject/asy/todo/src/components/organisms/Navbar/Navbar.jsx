import React from "react";
import { default as IconButton } from "../../atoms/iconButton/IconButton";
import { StyledNavbar, LeftDiv, RightDiv } from "./style";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Navbar = (props) => {
  return (
    <StyledNavbar>
      <LeftDiv>
        <IconButton icon={faCoffee} />
        <IconButton icon={faCoffee} />
      </LeftDiv>
      <RightDiv>
        <IconButton icon={faCoffee} />
        <IconButton icon={faCoffee} />
      </RightDiv>
    </StyledNavbar>
  );
};

export default Navbar;
