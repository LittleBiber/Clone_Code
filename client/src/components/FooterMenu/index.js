import React from "react";
import PropTypes from "prop-types";
import "./FooterMenu.css";

export const FooterMenu = ({ title, options }) => {
  return (
    <div className="footer_menu">
      <div className="footer_title">{title}</div>
      <div className="footer_option_wrapper">
        {options.map((one) => (
          <div className="footer_option">{one}</div>
        ))}
      </div>
    </div>
  );
};

PropTypes.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
};
