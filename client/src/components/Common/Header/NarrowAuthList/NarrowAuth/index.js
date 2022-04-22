import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Main = styled.div`
  background-color: white;
  width: 100%;

  .input {
    display: none;
  }

  .head {
    width: 100%;
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      font-size: 16px;
      font-weight: 500;
      padding: 20px 35px;
      display: flex;
      align-items: center;
      color: black;
    }

    .title {
      width: 100%;
      height: 65px;
      padding: 0 35px;

      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      font-weight: bold;

      :hover {
        color: #dc001a;
      }
    }

    .icon {
      color: grey;
      font-size: 20px;
      transition: all 0.3s ease-in-out 0s;
    }
  }

  .tail {
    max-height: 0;
    overflow: hidden;
    border-bottom: 1px solid #d6d6d6;
    color: black;
    transition: all 0.3s ease-in-out 0s;

    .selection {
      font-size: 18px;
      padding: 12px 35px;
      cursor: pointer;
      color: black;
    }
  }

  #${(props) => props.target}:checked ~ .tail {
    max-height: 15em;
  }

  #${(props) => props.target}:checked ~ .head .icon {
    transform: rotate(180deg);
  }
`
export const NarrowAuth = ({ id, head, tail }) => {
  return (
    <Main target={id}>
      <div>
        <input className="input" type="checkbox" id={id} />

        <label className="head" htmlFor={id}>
          <Link to={head.href}>
            <div className="title">{head.title}</div>
          </Link>
          <div className="icon">
            {tail.length ? (
              <FontAwesomeIcon icon="fa-solid fa-angle-down" />
            ) : (
              ''
            )}
          </div>
        </label>

        <div className="tail">
          {tail.map((one, idx) => (
            <Link to={one.href} key={idx}>
              <div className="selection">{one.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </Main>
  )
}

NarrowAuth.propTypes = {
  data: PropTypes.array,
}
