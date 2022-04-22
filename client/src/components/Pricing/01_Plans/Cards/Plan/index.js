import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 355px;
  border-radius: 8px;
  background-color: white;

  box-shadow: rgb(0 0 0 / 8%) 0px 0px 12px 0px;

  @media (max-width: 991px) {
    width: 335px;
    height: 361px;
  }
`

const TopBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 8px 8px 0px 0px; // 고마워요 MDN
  background-color: ${(props) => props.color};
`

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;

  .bar_title {
    width: 100%;
    background-color: #dddddd;
    height: 1px;
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
  font-size: 14px;

  .list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .group {
      color: ${(props) => (!props.group ? '#999999' : 'black' || 'black')};
    }

    @media (max-width: 991px) {
      font-size: 16px;
    }
  }

  div {
    font-family: SourceHanSansK-Medium;

    font-weight: 500;
    letter-spacing: -0.42px;
    text-align: left;
    color: #1e1e1e;
  }
`

const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  .category {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    height: 20px;

    .type {
      width: 50px;
      height: 22px;
      font-size: 13px;
      color: white;
      background-color: ${(props) => props.color};
      text-align: center;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 991px) {
        display: none;
      }
    }

    .spic {
      color: #cd001a;
      font-weight: 700;
    }
  }

  .plan_name {
    font-size: 26px;
    font-weight: 600;
    color: ${(props) => props.color};
    font-family: Lato;
    margin-bottom: 10px;
  }
`

const Price = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  justify-content: left;
  position: relative;
  height: 100px;

  .expense_year {
    text-direction: left;
    position: absolute;
    top: 10px;
    font-size: 14px;
    color: grey;
    text-decoration: line-through;
  }

  .visible {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 95px;
    margin-bottom: 25px;
    padding-top: 30px;

    .left {
      display: flex;
      align-items: flex-end;
      justify-content: left;

      .expense {
        font-weight: bold;
        font-size: 34px;
        color: #552c2c;
        text-align: left;
        margin-right: 8px;
      }

      .unit {
        color: grey;
        font-size: 14px;
      }
    }
  }

  .caution_narrow {
    color: #b5b5b5;
    font-size: 14px;

    @media (min-width: 991px) {
      display: none;
    }
  }

  @media (max-width: 991px) {
    width: 100%;
  }
`

export const Plan = ({
  name,
  color,
  type,
  spic,
  expense,
  expense_year,
  result,
  status,
}) => {
  return (
    <Main>
      <TopBar color={color} />
      <Body>
        <Title color={color}>
          <div className="category">
            <div className="type">{type}</div>
            <div className="spic">{spic && !status ? '2주 무료' : ''}</div>
          </div>
          <div className="plan_name">{name}</div>
        </Title>
        <div className="bar_title" />

        <Price>
          <div className="expense_year">{status ? expense : ''}</div>
          <div className="visible">
            <div className="left">
              <div className="expense">{status ? expense_year : expense}</div>
              <div className="unit">원/월</div>
            </div>
            <div className="caution_narrow">부가세 미포함</div>
          </div>
        </Price>

        <div className="bar_title" />

        <Bottom group={result.group}>
          <div className="list">
            <div>계약 체결 건수</div>
            <div>{result.count ? `${result.count}건` : '무제한'}</div>
          </div>
          <div className="list">
            <div>첨부파일</div>
            <div>{result.attach ? `계약당 ${result.attach}건` : '무제한'}</div>
          </div>
          <div className="list">
            <div className="group">그룹 관리</div>
            <div className="group">
              {!result.group ? '제공 안함' : `${result.group}명`}
            </div>
          </div>
        </Bottom>
      </Body>
    </Main>
  )
}

Plan.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  spic: PropTypes.bool,
  expense: PropTypes.string,
  expense_year: PropTypes.string,
  reuslt: PropTypes.object,
  status: PropTypes.number,
}
