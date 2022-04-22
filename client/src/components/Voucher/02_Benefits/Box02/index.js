import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Steps } from './Step'

const Main = styled.div`
  width: 100%;
  height: 100%;
  max-width: 904px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 33px 60px;
  gap: 20px;

  @media (max-width: 991px) {
    padding: 21px;
    max-width: 904px;
  }
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.div`
  font-family: SourceHanSansK-Bold;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.11;
  letter-spacing: -0.18px;
  text-align: left;
  color: #6591da;
  white-space: pre-line;

  @media (max-width: 991px) {
    font-size: 12px;
  }
`
const DescSub = styled.div`
  font-family: SourceHanSansK-Normal;
  font-size: 16px;
  line-height: 2;
  letter-spacing: -0.54px;
  text-align: left;
  color: #999999;

  @media (max-width: 991px) {
    font-size: 12px;
  }
`

const Bottom = styled.div``

export const Box02 = () => {
  return (
    <Main>
      <Top>
        <Title>도뉴 구매 방법</Title>
        <DescSub>(수요기업 선정 이후)</DescSub>
      </Top>
      <Bottom>
        <Steps />
      </Bottom>
    </Main>
  )
}

Box02.propTypes = {}
