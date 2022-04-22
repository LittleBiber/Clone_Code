import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/all.js'

const Main = styled.div`
  background: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .input {
    display: none;
  }

  .options {
    width: 100%;
    height: 100%;

    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      padding: 10px 10px;

      user-select: none;
      cursor: pointer;
      border: 1px solid #bdbdbd;
      color: #bdbdbd;

      :hover {
        border: 1px solid #3d3d3d;
        color: #3d3d3d;
      }
    }

    .tail {
      max-height: 0;
      overflow: hidden;
      cursor: pointer;
      background: white;

      .selection {
        font-size: 16px;
        padding: 10px 14px;

        :hover {
          background: #f5f5f5;
        }
      }

      .selected {
        font-size: 16px;
        padding: 10px 14px;
        font-weight: 600;
        background: #f5f5f5;
      }
    }
  }

  #${(props) => props.target}:checked ~ .options .head {
    border-bottom: 0;
  }

  #${(props) => props.target}:checked ~ .options .tail {
    -webkit-animation: height-max 0.1s ease-in-out both alternate;
    @keyframes height-max {
      from {
        max-height: 0;
        background: white;
        opacity: 0;
      }
      to {
        max-height: 15rem;
        overflow-x: hidden;
        overflow-y: auto;
        border: 1px solid #7d7d7d;
        border-top: 0px;
        opacity: 1;
      }
    }
  }

  #${(props) => props.target}:checked ~ .options .head .icon {
    -webkit-animation: test 0.2s ease-in-out both alternate;
    @keyframes test {
      from {
        op
        transform: rotate(0deg);
      }
      to {
        transform: rotate(180deg);
      }
    }
  }
`

export const Selection = ({ data, InputValue }) => {
  const [selected, setSelected] = useState(data[1])

  const handleSelected = (event) => {
    setSelected(event.target.innerText)
    InputValue({ target: { id: data[0], value: event.target.innerHTML } })
  }

  return (
    <Main target={data[0]}>
      <input className="input" type="checkbox" id={data[0]} />
      <label className="options" htmlFor={data[0]}>
        <div className="head">
          <div className="selection_title">{selected}</div>
          <div className="icon">
            <FontAwesomeIcon icon="fa-solid fa-angle-down" />
          </div>
        </div>

        <div className="tail">
          {data[2].map((one, idx) => (
            <div
              className={one === selected ? 'selected' : 'selection'}
              key={idx}
              value={one}
              onClick={handleSelected}
            >
              {one}
            </div>
          ))}
        </div>
      </label>
    </Main>
  )
}

Selection.propTypes = {
  data: PropTypes.array,
  InputValue: PropTypes.func,
}
