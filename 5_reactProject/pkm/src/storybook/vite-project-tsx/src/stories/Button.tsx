import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  
  primary?: boolean;

  danger?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;

  children?: React.ReactNode;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
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
  danger=false,
  size,
  backgroundColor,
  label,
  children,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : (danger ? 'storybook-button--danger'  : 'storybook-button--secondary');
  
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
      {label}
    </button>
  );
};
