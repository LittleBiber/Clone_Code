import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Main = styled.div`
  background-color: #1a1515;
  width: 100%;

  .input[type='checkbox'] {
    display: none;
  }

  .footer_head {
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      font-size: 16px;
      font-weight: 500;
      // padding: 20px 35px;
      display: flex;
      align-items: center;
    }

    .footer_title {
      width: 100%;
      height: 65px;
      color: #707070;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
    }

    .footer_icon {
      color: grey;
      font-size: 20px;
      transition: all 0.3s ease-in-out 0s;
    }
  }

  .footer_tail {
    max-height: 0;
    overflow: hidden;
    border-bottom: 1px solid #2f2f2f;
    transition: all 0.3s ease-in-out 0s;

    .selection {
      margin-top: 5px;
      font-size: 16px;
      height: 30px;
      margin-bottom: 26px;
      cursor: pointer;
      color: #dddddd;
    }
  }

  #${(props) => props.target}:checked ~ .footer_tail {
    max-height: 30em;
  }

  #${(props) => props.target}:checked ~ .footer_head .footer_icon {
    transform: rotate(180deg);
  }
`
export const NarrowMenu = ({ id, head, tail }) => {
  return (
    <Main target={id}>
      <input className="input" type="checkbox" id={id} />
      <label className="footer_head" htmlFor={id}>
        <Link to={head.href}>
          <div className="footer_title">{head.title}</div>
        </Link>
        <div className="footer_icon">
          {tail.length ? <FontAwesomeIcon icon="fa-solid fa-angle-down" /> : ''}
        </div>
      </label>

      <div className="footer_tail">
        {tail.map((one, idx) => (
          <Link to={one.href} key={idx}>
            <div className="selection">{one.title}</div>
          </Link>
        ))}
      </div>
    </Main>
  )
}

NarrowMenu.propTypes = {
  data: PropTypes.array,
}
