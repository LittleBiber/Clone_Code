import React from "react";
import PropTypes from "prop-types";
import "./BoxItemType01.css";

export const BoxItemType01 = ({ title, desc, sub_desc }) => {
  return (
    <div className="boxitemtype01">
      <div className="box_title">{title}</div>
      <span className="box_desc">
        {desc}
        <span className="box_sub_desc">{sub_desc}</span>
      </span>
    </div>
  );
};

BoxItemType01.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  sub_desc: PropTypes.string,
};
