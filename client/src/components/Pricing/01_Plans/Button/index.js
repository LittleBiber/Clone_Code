import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: 991px) {
    display: none;
  }
`

const Start = styled.button`
  width: 210px;
  height: 50px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  background-color: ${(props) => props.background || 'white'};
  color: ${(props) => props.color || 'white'};
  border: 1px solid ${(props) => props.background || '#713838'};
  border-radius: 4px;
`

export const Button = () => {
  return (
    <Main>
      <Start background="#713838">2주 무료 시작</Start>
      <Start color="#713838">실시간 상담</Start>
    </Main>
  )
}

Button.propTypes = {}
