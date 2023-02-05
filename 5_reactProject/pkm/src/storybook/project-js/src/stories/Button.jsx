import React from "react";
import PropTypes from "prop-types";
import css from "./Button.module.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? css.buttonPrimary : css.buttonSecondary;
  const sizeMode = {
    Small: css.buttonSmall,
    Medium: css.buttonMedium,
    Large: css.buttonLarge,
  };
  return (
    <button
      type="button"
      // className={["buttonMain", `button${size}`, mode].join(" ")}
      className={css.buttonMain + " " + sizeMode[size] + " " + mode}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["Small", "Medium", "Large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "Medium",
  onClick: undefined,
};
