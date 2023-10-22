import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link,
  web,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const onclicker = (url) => {
    window.location.replace(url);
  };
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to={{ pathname: link }} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={() => (web ? onclicker(web) : onClick)}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
