import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Main = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 550px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  text-align: right;
  padding: 130px 40px 180px;
  align-items: center;
  gap: 30px;

  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
  }
`

const Title = styled.div`
  font-family: SourceHanSansK-Bold;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.3;
  margin-bottom: 30px;

  @media (max-width: 991px) {
    font-size: 26px;
  }
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.3;
  margin-top: 10px;
  margin-bottom: 30px;

  @media (max-width: 991px) {
    font-size: 16px;
  }
`

const OutLink = styled.span`
  font-size: 18px;
  line-height: 1.3;
  color: #713838;
  font-weight: 500;
  cursor: pointer;

  span {
    margin-right: 4px;
  }

  @media (max-width: 991px) {
    font-size: 16px;
  }
`

const Img = styled.img`
  width: 600px;

  @media (max-width: 991px) {
    width: 90%;
  }
`

export const WorldWide = () => {
  return (
    <Main>
      <div>
        <Title>
          해외에서도
          <br />
          많은 국가들이
          <br />
          전자계약을
          <br />
          사용하고 있습니다.
          <br />
        </Title>
        <div>
          <Description>
            이미 전세계적으로 많은 국가들이
            <br />
            전자서명 및 계약의 법률 합법성을
            <br />
            인정하고 있습니다.
          </Description>
          <OutLink>
            <span>해외 전자계약 법률 확인하기</span>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </OutLink>
        </div>
      </div>
      <Img src="worldwide.png" alt="worldwide" />
    </Main>
  )
}

WorldWide.propTypes = {}
