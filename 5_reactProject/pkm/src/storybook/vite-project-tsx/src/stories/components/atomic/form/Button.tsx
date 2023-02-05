import React from "react";
import css from "./Button.modules.css";
interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? css.buttonPrimary : css.buttonSecondary;
  const sizeMode = {
    small: css.buttonsmall,
    medium: css.buttonmedium,
    large: css.buttonlarge,
  };

  return (
    <button
      type="button"
      className={css.buttonMain + " " + sizeMode[size] + " " + mode}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
