import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({ primary, label }) => {
  const mode = primary ? "signin" : "signup";
  return <button className={[mode].join(" ")}>{label}</button>;
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
};
