import { InputGroup } from "react-bootstrap";
import styled, { css } from "styled-components";

const StyledNavbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #db4c3f;
  display: flex;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
  width: 50%;
  background-color: blue;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const RightDiv = styled.div`
  width: 50%;
  background-color: green;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  background-color: pink;
`;
export { StyledNavbar, LeftDiv, RightDiv, NavbarLinkContainer };
