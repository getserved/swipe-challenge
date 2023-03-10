import React, { FC } from "react";
import cx from "classnames"

import $ from "./Button.module.css";

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset'
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: ButtonType;
  variant?: ButtonVariant,
  className?: string
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = ButtonType.BUTTON,
  variant = ButtonVariant.PRIMARY,
  className
}) => {
  return (
    <button
      className={cx([className, $.button, $[variant]])}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
