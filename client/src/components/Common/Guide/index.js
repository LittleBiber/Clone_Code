import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Main = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 100%;
  justify-content: center;
  max-width: 1200px;
  margin-bottom: 80px;

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Button = styled.div`
  width: 600px;
  height: 150px;
  border-radius: 4px;
  padding: 25px 50px;
  gap: 35px;
  background-color: #f8f8f8;

  display: flex;
  flex-direction: row;

  .title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.8px;
    color: #713838;
    margin: 10px 0px 7px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .desc {
    letter-spacing: -0.5px;
  }

  :hover {
    box-shadow: 5px 5px 5px #ececec;
    cursor: pointer;
  }

  @media (max-width: 991px) {
    width: 95%;
    height: 120px;

    .title {
      font-size: 18px;
    }

    .desc {
      font-size: 14px;
      letter-spacing: -0.4px;
    }

    img {
      width: 70px;
      height: 70px;
    }
  }
`

export const Guide = () => {
  return (
    <Main>
      <Button>
        <img src="service_pdf.png" alt="service" />
        <div className="text">
          <div className="title">
            <span>도뉴 서비스 소개서</span>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-file-arrow-down" />
            </span>
          </div>
          <div className="desc">도뉴의 서비스 가치를 확인하세요!</div>
        </div>
      </Button>
      <Button>
        <img src="service_guide.png" alt="guide" />
        <div>
          <div className="title">
            <span>도뉴 사용 가이드</span>
            <span>
              <FontAwesomeIcon icon="fa-solid fa-angle-right" />
            </span>
          </div>
          <div className="desc">
            도뉴 사용 가이드로 전자계약을 쉽게 시작하세요!
          </div>
        </div>
      </Button>
    </Main>
  )
}

PropTypes.propTypes = {}
