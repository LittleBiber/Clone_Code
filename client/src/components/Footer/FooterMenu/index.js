import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Menu = styled.div`
  min-width: 12rem;
`;

const Title = styled.div`
  color: #707070;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Option = styled.li`
  margin-bottom: 1rem;
  color: white;
  list-style: none;
`;

export const FooterMenu = ({ title, options }) => {
  return (
    <Menu>
      <Title>{title}</Title>
      <ul>
        {options.map((one) => (
          <Option>{one}</Option>
        ))}
      </ul>
    </Menu>
  );
};

PropTypes.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
};
