import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/all.js'

const Main = styled.div`
  background-color: white;
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px 0px;
  border-radius: 4px;

  .input {
    display: none;
  }

  .head {
    width: 100%;
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;

    div {
      font-size: 16px;
      font-weight: 500;
      padding: 20px 35px;
      display: flex;
      align-items: center;
    }

    .title {
      width: 100%;
      height: 68px;
      padding: 0 35px;

      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      color: #713838;
      font-weight: bold;
    }

    .icon {
      transition: all 0.3s ease-in-out 0s;
      color: grey;
      font-size: 20px;
    }
  }

  .tail {
    transition: all 0.3s ease-in-out 0s;
    max-height: 0;
    overflow: hidden;

    .desc_main {
      font-size: 18px;
      margin: 0 20px 20px 20px;
      letter-spacing: -0.48px;
    }

    .desc_sub {
      margin: 0 20px 20px 20px;
      font-size: 16px;
      color: #707070;
      letter-spacing: -0.48px;
    }
  }

  @media (max-width: 991px) {
    .head .title {
      padding: 15px;
      font-size: 16px;
    }

    .tail {
      .desc_main {
        font-size: 14px;
        margin: 0 15px 15px 15px;
      }

      .desc_sub {
        font-size: 12px;
      }
    }
  }

  #${(props) => props.target}:checked ~ .tail {
    max-height: 15em;
  }

  #${(props) => props.target}:checked ~ .head .icon {
    transform: rotate(180deg);
  }
`
export const CardMenu = ({ id, title, desc, desc_sub }) => {
  return (
    <Main target={id}>
      <div>
        <input className="input" type="checkbox" id={id} />
        <label className="head" htmlFor={id}>
          <div className="title">{title}</div>
          <div className="icon">
            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
          </div>
        </label>
        <div className="tail">
          {desc.map((one, idx) => (
            <div className="desc_main" key={idx}>
              {one}
            </div>
          ))}
          <div className="desc_sub">{desc_sub}</div>
        </div>
      </div>
    </Main>
  )
}

CardMenu.propTypes = {
  data: PropTypes.array,
}
