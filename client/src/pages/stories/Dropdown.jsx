import React from "react";
import PropTypes from "prop-types";

import "./dropdown.css";

export const Dropdown = ({ title, options }) => (
  <div>
    <p>{title}</p>
    {options.map((one) => {
      <span>{one}</span>;
    })}
  </div>
);

Dropdown.propTypes = {
  title: PropTypes.string,
  options: PropTypes.node,
  // user: PropTypes.shape({}),
  // onLogin: PropTypes.func.isRequired,
  // onLogout: PropTypes.func.isRequired,
  // onCreateAccount: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  user: null,
};
