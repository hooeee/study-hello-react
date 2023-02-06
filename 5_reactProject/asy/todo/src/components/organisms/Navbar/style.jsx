import { InputGroup } from "react-bootstrap";
import styled, { css } from "styled-components";

const StyledNavbar = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #db4c3f;
  display: -webkit-box;
  flex-direction: column;
  margin
`;

const LeftDiv = styled.div`
  flex: 50%;
  display: flex;
  justify-content:flex-start
  padding-left: 5%;
  background-color: blue;
`;
const RightDiv = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;
  background-color: green;
`;
export { StyledNavbar, LeftDiv, RightDiv };
