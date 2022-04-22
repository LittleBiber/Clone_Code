import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SignUp = styled.button`
  padding: 0;
  margin: 0;
  font-weight: 500;
  border: 1px solid #cd001a;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: #cd001a;
  font-size: 16px;
  padding: 11px 6px;
  width: 76px;
  margin-left: 5px;
  text-align: center;
  :hover {
    background-color: #a20b0b;
    color: #f9ffff;
  }
`

const SignIn = styled.button`
  padding: 0;
  margin: 0;
  font-weight: 500;
  border: 1px solid #b5b5b5;
  border-radius: 4px;
  cursor: pointer;
  color: #707070;
  background-color: white;
  font-size: 16px;
  padding: 11px 6px;
  width: 76px;
  margin-right: 5px;
  :hover {
    color: red;
    border: 1px solid red;
  }
`

export const Button = ({ type }) => {
  return type ? (
    <Link to="/signin">
      <SignIn>로그인</SignIn>
    </Link>
  ) : (
    <Link to="/signup">
      <SignUp>회원가입</SignUp>{' '}
    </Link>
  )
}

Button.propTypes = {
  type: PropTypes.bool,
}
