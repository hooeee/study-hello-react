import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: none;
  margin: 4px;
  border-radius: 10px;
  padding: 10px;
  width: auto;
  font-weight: bold;

  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
  ${(props) =>
    props.Square &&
    css`
      background: {props.Color};
      color: white;
    `};
  ${(props) =>
    props.icon &&
    css`
      background: red;
      span {
        marin: 1em;
      }
    `};
`;

// ${(props) =>
//   props.Cancel === "red" &&
//   css`
//     background: red;
//   `}
// ${(props) =>
//   props.TodoAdd === "red" &&
//   css`
//     background: red;
//   `}
// ${(props) =>
//   props.color ||
//   css`
//     background: red;
//   `};
// ${(props) =>
//   props.variant == "test" &&
//   css`
//     background: red;
//   `}
//   ${(props) =>
//     props.raised &&
//     !props.disabled &&
//     css`
//       background: #009898;
//       box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.19),
//         0px 1px 1px rgba(0, 0, 0, 0.25);
//       border-radius: 4px;
//       color: #ffffff;
//       border: none;
//     `}
//   ${(props) =>
//     props.unelevated &&
//     !props.disabled &&
//     css`
//       background: #009898;
//       border-radius: 4px;
//       color: #ffffff;
//       border: none;
//     `}
// ${(props) =>
//     props.outlined &&
//     !props.disabled &&
//     css`
//       background: #ffffff;
//       border: 2px solid #009898;
//       border-radius: 4px;
//       color: #009898;
//     `}
// ${(props) =>
//     props.outlined &&
//     props.disabled &&
//     css`
//       background: #ffffff;
//       border: 2px solid #cccccc !important;
//       border-radius: 4px;
//       color: #cccccc;
//     `}
// ${(props) =>
//     props.rounded &&
//     !props.disabled &&
//     css`
//       background: #009898;
//       border-radius: 18px;
//       color: #ffffff;
//       border: none;
//     `}
//   ${(props) =>
//     props.icon &&
//     css`
//       span {
//         margin-left: 1em;
//       }
//     `}

export { StyledButton };
