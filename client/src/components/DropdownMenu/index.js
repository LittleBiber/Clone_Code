import React from "react";
import PropTypes from "prop-types";
import "./Dropdownmenu.css";

export const DropdownMenu = ({ title, options }) => {
  return (
    <div className="menu">
      <div className="menu_name" id="title">
        {title}
      </div>
      {options ? (
        <div className="menu_wrapper">
          {options.map((one) => (
            <div className="option">{one}</div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

DropdownMenu.propTypes = {
  /** Composition of the task */
  title: PropTypes.string.isRequired,
  /** Title of the task */
  options: PropTypes.array.isRequired,
};
