import React from 'react'
import styled from 'styled-components'
import { Pro } from './Pro'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  background-color: white;
  padding: 40px 0;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const TextWrapper = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  padding-right: 40px;
  padding-bottom: 0px;
  padding-left: 0px;
  align-items: flex-end;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  flex: 1.5 1 0%;

  .title {
    font-family: SourceHanSansK-Bold;
    font-weight: 600;
    font-size: 35px;
    line-height: 1.3;
    margin-bottom: 2rem;
    text-align: right;
  }

  .description {
    font-family: SourceHanSansK-Normal;
    line-height: 1.3;
    font-size: 18px;
    margin-top: 0.5rem;
    margin-bottom: 1.2rem;
    text-align: right;
  }

  @media (max-width: 991px) {
    align-items: center;
    padding: 0;

    .title {
      text-align: center;
      font-size: 27px;
    }

    .description {
      text-align: center;
      font-size: 16px;
    }
  }
`

const Img = styled.img`
  width: 600px;

  @media (max-width: 991px) {
    width: 100%;
  }
`

export const Pros = () => {
  return (
    <Main>
      <Top>
        <Img src="pros.png" alt="pros" />
        <TextWrapper>
          <div className="title">
            도뉴와 함께 비대면으로
            <br />
            손쉽고 안전하게
            <br />
            계약을 진행하세요
          </div>
          <div className="description">
            종이와 동일한 법적효력과 함께
            <br />
            복잡한 계약 업무를 한번에 서명하고
            <br />
            손쉽게 관리할 수 있습니다.
          </div>
        </TextWrapper>
      </Top>
      <Pro />
    </Main>
  )
}

Pros.propTypes = {}
