import React from 'react'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/all.js'

import { Plan } from './Plan'
import { Inquery } from './Inquiry'

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  height: auto;
  justify-content: space-around;
  padding: 40px 20px;

  .question {
    font-size: 36px;
    font-weight: bold;
    word-break: keep-all;
    width: 370px;
    text-align: center;
    padding: 20px 0;
    line-height: 36px;

    @media (max-width: 993px) {
      font-size: 28px;
      width: 300px;
    }
  }

  .caution {
    width: 100%;
    max-width: 904px;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    color: #999999;
    padding: 0 0 10px 0;
  }

  .plans {
    display: flex;
    flex-direciton: row;
    gap: 20px;
    max-width: 1220px;

    @media (max-width: 991px) {
      flex-direction: column;
    }
  }

  .bar {
    width: 90%;
    max-width: 910px;
    padding: 0.5px 0px;
    background-color: #dddddd;
    margin: 30px 0px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  background-color: #faf7ef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 70px 0;

  @media (max-width: 991px) {
    .caution {
      width: 300px;
    }
  }
`

export const Price = () => {
  return (
    <Main>
      <Wrapper>
        <div className="question">
          70% 지원 혜택 받으면 본인 부담은 얼마일까요?
        </div>
        <div className="caution">*부가세 미포함</div>
        <div className="plans">
          <Plan
            name="PRO I"
            expense={['479,040', '335,328', '143,712']}
            reuslt={['300건', '무제한', '3명']}
          />
          <Plan
            name="PRO II"
            expense={['854,400', '598,080', '256,320']}
            reuslt={['500건', '무제한', '5명']}
          />
          <Plan
            name="PRO III"
            expense={['1,526,400', '1,068,480', '457,920']}
            reuslt={['무제한', '무제한', '10명']}
          />
        </div>

        <div className="bar" />

        <Inquery />
      </Wrapper>
    </Main>
  )
}

Price.propTypes = {}
