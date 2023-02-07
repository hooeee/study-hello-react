import { InputGroup } from "react-bootstrap";
import styled, { css } from "styled-components";

const StyledNavbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #db4c3f;
  display: inline-flex;
  justify-content: space-around;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5%;
  background-color: blue;
`;
const RightDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5%;
  background-color: green;
`;

const InnerDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  background-color: pink;
`;
export { StyledNavbar, LeftDiv, RightDiv, InnerDiv, NavbarLinkContainer };
