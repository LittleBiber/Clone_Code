import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/all.js'

const Main = styled.div`
  background-color: white;
  width: 100%;

  .question_input {
    display: none;
  }

  .question_label {
    width: 100%;
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;

    .question_title_wrapper {
      font-size: 16px;
      transition: all 0.3s ease-in-out 0s;
      border-top: 1px solid #e2e2e2;
      width: 100%;
      display: flex;
      padding: 25px;

      .question_title {
        width: 100%;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }

  .answer {
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out 0s;
    background: white;
    border-bottom: 1px solid #e2e2e2;

    .test {
      padding: 20px;
    }
  }

  #${(props) => props.target}:checked ~ .answer {
    max-height: 15em;
    background: #f8f8f8;
  }

  #${(props) => props.target}:checked + .question_label > div {
    border-top: 1px solid black;
    background: #f8f8f8;
  }
`

export const Card = ({ id, question, answer }) => {
  return (
    <Main target={id}>
      <div>
        <input className="question_input" type="checkbox" id={id} />
        <label className="question_label" htmlFor={id}>
          <div className="question_title_wrapper">
            <div className="question_title">{question}</div>
            <div className="question_icon">
              <FontAwesomeIcon icon="fa-solid fa-plus" />
            </div>
          </div>
        </label>
        <div className="answer">
          <div className="test">{answer}</div>
        </div>
      </div>
    </Main>
  )
}

Card.propTypes = {
  QandA: PropTypes.array,
}
