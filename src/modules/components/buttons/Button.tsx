import React from "react";
import "./button.scss";

interface ButtonProps {
  color: "primary" | "secondary";
  text: string;
  onClick: () => void;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ color, text, onClick, ...rest }) => {
  const buttonClassName = `button-${color}`;

  return (
    <button className={buttonClassName} onClick={onClick} {...rest}>
      {text}
    </button>
  );
};

export default Button;
