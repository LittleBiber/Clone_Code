import React from 'react'
import styled from 'styled-components'
import { CardList } from './CardList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 160px 20px;
`

const Main = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`

const Head = styled.div`
  width: 100%;
  max-width: 300px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 991px) {
    align-items: center;
    text-align: center;
  }

  .title {
    font-size: 38px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -2px;
    margin: 0px 0px 24px;

    @media (max-width: 991px) {
      font-size: 26px;
      text-
    }
  }

  .help {
    font-size: 18px;
    color: #713838;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    @media (max-width: 991px) {
      font-size: 14px;
    }
  }
`

export const Questions = () => {
  return (
    <Wrapper>
      <Main>
        <Head>
          <div className="title">
            요금제
            <br />
            자주 묻는 질문
          </div>
          <div className="help">
            <span>고객지원 바로가기</span>
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </div>
        </Head>
        <CardList />
      </Main>
    </Wrapper>
  )
}

Questions.propTypes = {}
