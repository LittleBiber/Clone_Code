import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -1px;

  button {
    background-color: #713838;
    color: white;
    width: 180px;
    height: 50px;
    font-weight: 600;
    border-radius: 4px;
  }

  @media (max-width: 991px) {
    width: 90%;
    flex-direction: column;
    gap: 10px;

    .inquery_title {
      width: 200px;
      word-break: keep-all;
      text-align: center;
      font-size: 14px;
    }
  }
`

export const Inquery = () => {
  return (
    <Main>
      <div className="inquery_title">
        요금제에 대해 더 궁금한 점이 있으면 문의해주세요.
      </div>
      <div>
        <button>
          문의하기
          <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" />
        </button>
      </div>
    </Main>
  )
}

Inquery.propTypes = {}
