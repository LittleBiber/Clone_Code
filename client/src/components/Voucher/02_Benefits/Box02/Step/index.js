import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  max-width: 1220px;
  height: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .arrow_down {
    width: 65px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a0a0a0;
    margin: 10px 0;

    @media (min-width: 991px) {
      display: none;
    }
  }
`

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  -webkit-box-pack: start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 991px) {
    flex-direction: row;
  }

  .step {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    border: 1px solid #efefef;
    font-weight: 500;
    line-height: 2.5;
    letter-spacing: -0.4px;
    color: #b5b5b5;
    width: 65px;
    height: 25px;
    font-size: 14px;

    @media (max-width: 991px) {
      font-size: 12px;
    }
  }

  .description {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .string {
    max-width: 154px;
    font-family: SourceHanSansK-Medium;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: -0.66px;
    text-align: left;

    a {
      color: black;
      text-decoration: underline;
    }

    @media (max-width: 991px) {
      max-width: 300px;
      font-size: 14px;
    }
  }

  .arrow {
    font-size: 20px;
    color: #999999;
    margin: 15px;

    @media (max-width: 991px) {
      display: none;
    }
  }
`

export const Steps = () => {
  return (
    <Main>
      <Step>
        <span className="step">STEP 1</span>
        <div className="description">
          <div className="string">
            <a
              href="https://www.k-voucher.kr/index.php/page/productSearch?search_category=bmm.cmpny_nm&search_keyword=%EB%8F%84%EB%89%B4"
              target="_blank"
            >
              K-비대면바우처플랫폼
            </a>
            에서 도뉴를 검색합니다.
          </div>
          <div className="arrow">
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </div>
        </div>
      </Step>
      <div className="arrow_down">
        <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
      </div>
      <Step>
        <span className="step">STEP 2</span>
        <div className="description">
          <div className="string">요금제 선택 후 거래상담을 요청합니다.</div>
          <div className="arrow">
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </div>
        </div>
      </Step>
      <div className="arrow_down">
        <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
      </div>
      <Step>
        <span className="step">STEP 3</span>
        <div className="description">
          <div className="string">
            요청한 거래가 승인되면 결제를 진행합니다.
          </div>
          <div className="arrow">
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </div>
        </div>
      </Step>
      <div className="arrow_down">
        <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
      </div>
      <Step>
        <span className="step">STEP 4</span>
        <div className="description">
          <div className="string">
            결제가 완료되면 도뉴를 사용할 수 있습니다.
          </div>
        </div>
      </Step>
    </Main>
  )
}

Steps.propTypes = {}
