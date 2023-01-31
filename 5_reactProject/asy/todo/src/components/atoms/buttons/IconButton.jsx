import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
const Button = (props) => {
  return <FontAwesomeIcon class={regular("coffee")} />;
};

export default Button;
