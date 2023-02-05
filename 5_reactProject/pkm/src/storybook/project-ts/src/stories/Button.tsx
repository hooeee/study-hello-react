import React from 'react';
import css from './Button.module.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'Small' | 'Medium' | 'Large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "Medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? css.buttonPrimary : css.buttonSecondary;
  const sizeMode = {
    Small: css.buttonSmall,
    Medium: css.buttonMedium,
    Large: css.buttonLarge,
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