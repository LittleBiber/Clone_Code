import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = styled.div`
  width: 100%;
`

const Wide2 = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;

  align-items: center;
  justify-content: space-around;
  background-color: #f9f9f9;
  height: 60px;
  font-size: 18px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 991px) {
    display: none;
  }

  .opiton_name {
    font-weight: 500;
    display: flex;
    justify-content: flex-start;
    margin-left: 100px;
  }

  .op {
    color: #763e3e;
    font-size: 24px;
  }
`

const Narrow = styled.div`
  @media (min-width: 991px) {
    display: none;
  }

  width: 100%;
  height: 60px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 20px;
  background-color: #f9f9f9;

  .opiton_name {
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: -0.54px;
    text-align: left;
    color: #1e1e1e;
    word-break: keep-all;
    width: 195px;
  }

  .op {
    color: #763e3e;
    font-size: 24px;
  }
`

export const Option = ({ title, basic, pro, type }) => {
  return (
    <Main>
      <Wide2>
        <div className="opiton_name">{title}</div>
        <div className="basic op">
          {' '}
          {basic ? <FontAwesomeIcon icon="fas fa-check" /> : '-'}
        </div>
        <div className="pro op">
          {pro ? <FontAwesomeIcon icon="fas fa-check" /> : '-'}
        </div>
      </Wide2>
      <Narrow>
        <div className="opiton_name">{title}</div>
        {type === '개인' ? (
          <div className="basic op">
            {' '}
            {basic ? <FontAwesomeIcon icon="fas fa-check" /> : '-'}
          </div>
        ) : (
          ''
        )}
        {type === '기업' ? (
          <div className="pro op">
            {pro ? <FontAwesomeIcon icon="fas fa-check" /> : '-'}
          </div>
        ) : (
          ''
        )}
      </Narrow>
    </Main>
  )
}

Option.propTypes = {
  name: PropTypes.string,
  basic: PropTypes.bool,
  pro: PropTypes.bool,
  type: PropTypes.string,
}
