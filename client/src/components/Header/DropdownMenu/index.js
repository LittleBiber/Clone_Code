import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const OptionsList = styled.div`
  margin-top: 1rem;
  padding: 0.5rem 0;
  display: none;
  border-radius: 4px;
  background-color: white;
  min-width: 8rem;
`;

const Menu = styled.div`
  padding: 1rem;

  :hover {
    .menu_name {
      color: red;
    }

    ${OptionsList} {
      display: block;
      box-shadow: rgb(0 0 0 / 16%) 0px 0px 12px 0px;
      position: absolute;
    }
  }
`;

const Option = styled.div`
  padding: 0.5rem;

  :hover {
    background-color: #f8f8f8;
    cursor: pointer;
    border-radius: 4px;
  }
`;

export const DropdownMenu = ({ title, options }) => {
  return (
    <Menu>
      <div className="menu_name" id="title">
        {title}
      </div>
      {options ? (
        <OptionsList>
          {options.map((one) => (
            <Option>{one}</Option>
          ))}
        </OptionsList>
      ) : (
        ""
      )}
    </Menu>
  );
};

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
