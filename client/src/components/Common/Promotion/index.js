import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = styled.div`
  background-color: #713838;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px;
  text-align: center;
  max-width: 1200px;
  width: 95%;
  margin-bottom: 30px;
  gap: 10px;

  .title {
    color: white;
    font-weight: bold;
    font-size: 30px;

    @media (max-width: 991px) {
      font-size: 24px;
      width: 200px;
    }
  }

  .desc {
    color: white;
    font-size: 18px;

    @media (max-width: 991px) {
      font-size: 16px;
      width: 160px;
    }
  }

  .button_wrapper {
    margin-top: 32px;
    display: flex;
    gap: 32px;

    @media (max-width: 991px) {
      flex-direction: column;
      justify-content: center;
    }
  }
`

const Button = styled.button`
  width: 280px;
  height: 56px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  font-family: SourceHanSansK-Medium;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.type
      ? `
    border: 1px solid white;
    color: #713838;
    background-color: white;
    `
      : `    
    border: 1px solid white;
    color: white;
    background-color: #713838;
    `};
`

export const Promotion = () => {
  return (
    <Main>
      <div className="title">전자계약의 시작은 도뉴로 하세요!</div>
      <div className="desc">가입 후 결제없이 2주간 무료 이용이 가능합니다.</div>
      <div className="button_wrapper">
        <Button type={1}>
          <div>2주 무료 시작</div>
        </Button>
        <Button type={0}>도입 문의</Button>
      </div>
    </Main>
  )
}

PropTypes.propTypes = {}
