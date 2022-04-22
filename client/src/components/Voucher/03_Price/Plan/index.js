import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 397px;
  border-radius: 8px;
  background-color: white;
`

const TopBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 8px 8px 0px 0px; // 고마워요 MDN
  background-color: #713838;
`

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;

  .title {
    font-size: 25px;
    color: #713838;
    font-weight: bold;
  }

  .bar_title {
    width: 100%;
    background-color: #dddddd;
    height: 1px;
    margin: 20px 0;
  }

  .bar_body {
    width: 100%;
    padding: 0.5px 0px;
    background-color: #dddddd;
    margin: 20px 0px;
  }
`

const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .item_wrapper {
    // 연간 요금 항목에도 같이 쓰려면 분리해줘야 함
    display: flex;
    align-items: center;
  }

  .item {
    font-family: SourceHanSansK-Medium;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.4px;
    text-align: left;
    color: #999999;

    span {
      font-family: Lato;
      font-size: 14px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.14px;
      text-align: left;
      color: black;
      margin-left: 2px;
    }
  }

  .price_wrapper {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 4px;

    .mark {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      background-color: #e2d1c6;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }

  .price {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -0.33px;
    text-align: right;
    color: #e2d1c6;
    text-decoration: line-through;
  }

  .price_result {
    color: black;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -0.33px;
    text-align: right;
  }

  span {
    font-family: SourceHanSansK-Regular;
    font-size: 12px;
    letter-spacing: -0.4px;
    text-align: left;
    color: #707070;
    margin-left: 2px;
  }
`

const Bottom = styled.div`
  width: 100%;
  max-width: 1216px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  .list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div {
    font-family: SourceHanSansK-Medium;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.42px;
    text-align: left;
    color: #1e1e1e;
  }
`

export const Plan = ({ name, expense, reuslt }) => {
  return (
    <Main>
      <TopBar />
      <Body>
        <div className="title">{name}</div>
        <div className="bar_title" />

        <Price>
          <div className="item">연간 요금</div>
          <div className="price">
            {expense[0]}
            <span>원</span>
          </div>
        </Price>

        <Price>
          <div className="item_wrapper">
            <div className="item">
              정부 지원<span>70%</span>
            </div>
          </div>
          <div className="price_wrapper">
            <div className="mark">-</div>
            <div className="price">
              {expense[1]}
              <span>원</span>
            </div>
          </div>
        </Price>

        <div className="bar_body" />

        <Price>
          <div className="item_wrapper">
            <div className="item">
              본인 부담<span>30%</span>
            </div>
          </div>
          <div className="price_wrapper">
            <div className="mark">=</div>
            <div className="price_result">
              {expense[2]}
              <span>원</span>
            </div>
          </div>
        </Price>

        <div className="bar_body" />

        <Bottom>
          <div className="list">
            <div>계약 체결 건수</div>
            <div>{reuslt[0]}</div>
          </div>
          <div className="list">
            <div>첨부파일</div>
            <div>{reuslt[1]}</div>
          </div>
          <div className="list">
            <div>그룹 관리</div>
            <div>{reuslt[2]}</div>
          </div>
        </Bottom>
      </Body>
    </Main>
  )
}

Plan.propTypes = {
  title: PropTypes.string,
  expense: PropTypes.array,
  reuslt: PropTypes.array,
}
