import React from 'react'
import styled from 'styled-components'
import { Box01 } from './Box01'
import { Box02 } from './Box02'

const Wrapper = styled.div`
  width: 100%;
  background-color: #f4f7fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`

const Main = styled.div`
  gap: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 95%;

  .head {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 35px;
      font-weight: 600;
      margin 30px 0;
      width: 790px;
      word-break: keep-all;
      line-height: 40px;
  
      @media (max-width: 991px ){ 
        font-size: 26px;
        word-break: keep-all;
        width: 310px;
      }
    }
  
    .desc {
      font-size: 21px;
      margin-bottom: 20px;

      @media (max-width: 991px ){
        font-size: 16px;
        word-break: keep-all;
        width: 310px;
        line-height: 20px;
      }
    }
  
    .help {
      background-color: white;
      width: 180px;
      height: 50px;
      font-weight: 500;
      box-shadow: 2px 5px 5px #ececec;
      margin-bottom: 40px;
    }
  }
`

export const Benefits = () => {
  return (
    <Wrapper>
      <Main>
        <div className="head">
          <div className="title">
            아직 비대면바우처 수요기업이 아니신가요?
            <br /> 지금 바로 신청하고 최대 280만원 혜택을 받아보세요.
          </div>
          <div className="desc">
            수요기업 신청이 어려우시면 문의해주세요. 도뉴 상담사가 신청을
            도와드립니다.
          </div>
          <button className="help">문의하기</button>
        </div>
        <Box01 />
        <Box02 />
      </Main>
    </Wrapper>
  )
}

Benefits.propTypes = {}
