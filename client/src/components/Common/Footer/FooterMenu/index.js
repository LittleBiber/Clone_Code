import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Main = styled.div`
  min-width: 80px;

  .footermenu_title {
    color: #707070;
    font-size: 14px;
    margin-bottom: 14px;
  }

  .footermenu_options {
    display: flex;
    margin-bottom: 14px;
    color: #dddddd;
    list-style: none;
    font-size: 14px;
    line-height: 1.6;
    cursor: pointer;
    gap: 6px;
  }
`

export const FooterMenu = ({ title, options }) => {
  return (
    <Main>
      <div className="footermenu_title">{title}</div>
      <ul>
        {options.map((one, idx) => (
          <Link to={one.href} key={idx}>
            <div className="footermenu_options">{one.title}</div>
          </Link>
        ))}
      </ul>
    </Main>
  )
}

PropTypes.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
}
