import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SignUp = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0.3rem;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: white;
  background-color: #cd001a;
  font-size: 14px;
  padding: 11px 6px;
  width: 4.5rem;
  :hover {
    background-color: #a20b0b;
    color: #f9ffff;
  }
`;

const SignIn = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 0.3rem;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: grey;
  background-color: white;
  font-size: 14px;
  padding: 11px 6px;
  width: 4.5rem;
  :hover {
    color: red;
    border: 1px solid red;
  }
`;

export const Button = ({ type }) => {
  return type ? <SignIn>로그인</SignIn> : <SignUp>회원가입</SignUp>;
};

Button.propTypes = {
  type: PropTypes.string,
};
