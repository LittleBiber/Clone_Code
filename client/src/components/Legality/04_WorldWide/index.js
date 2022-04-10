import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-around;
  flex: 1.5 1 0%;
  background-color: white;
  padding-top: 2rem;
  text-align: right;
`

const Title = styled.div`
  font-family: SourceHanSansK-Bold;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.3;
  margin-bottom: 2rem;
`

const Description = styled.p`
  font-family: SourceHanSansK-Normal;
  line-height: 1.3;
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
`

const OutLink = styled.span`
  font-family: SourceHanSansK-Normal;
  line-height: 1.3;
  margin-bottom: 1.2rem;
  color: #713838;
  font-weight: 500;
  cursor: pointer;
`

const Img = styled.img`
  width: 600px;
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
          <OutLink>해외 전자계약 법률 확인하기</OutLink>
        </div>
      </div>
      <Img src="worldwide.png" alt="worldwide" />
    </Main>
  )
}

WorldWide.propTypes = {}
