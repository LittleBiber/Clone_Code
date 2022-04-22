import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 40px 0;
`

const Main = styled.div`
  background-color: white; // 회원가입창 배경색

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  border-radius: 4px;
  padding: 20px;

  .type_title {
    width: 100%;
    border-bottom: 1px solid grey; // 회원가입 글자 밑의 바
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 20px;
  }

  .type_desc {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px 0 30px;

    .select_type {
      font-size: 18px;
      font-weight: 500;
      padding: 5px;
    }
  }

  .button_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    button {
      width: 100%;
      margin: 0px;
      padding: 30px;

      background: white;
      border: 1px solid grey;
      border-radius: 8px;

      text-align: left;

      display: flex;
      flex-direction: column;
      gap: 10px;

      .button_title {
        font-size: 20px;
        font-weight: 600;

        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
      }

      :hover {
        background: #f8f5ed;
        border: 1px solid black;
      }
    }
  }
`

export const SelectType = ({ setValue }) => {
  useEffect(() => {
    setValue('signup')
  })

  return (
    <Wrapper>
      <Main>
        <div className="type_title">회원가입</div>
        <div className="type_desc">
          <span className="select_type">회원 유형 선택</span>
          <span className="select_desc">
            기업 회원과 개인 회원은 서로 연동되지 않습니다.
          </span>
        </div>
        <div className="button_wrapper">
          <button onClick={() => setValue('enterprise_01')}>
            <div className="button_title">
              <div>기업 회원</div>
              <FontAwesomeIcon icon="fa-solid fa-angle-right" />
            </div>
            <div className="button_desc">
              기업 및 개인 사업자에게 추천드리며
              <br />
              사내 계약을 효율적으로 관리하세요.
            </div>
          </button>
          <button onClick={() => setValue('personal')}>
            <div className="button_title">
              <div>개인 회원</div>
              <FontAwesomeIcon icon="fa-solid fa-angle-right" />
            </div>
            <div className="button_desc">
              개인에게 추천드리며
              <br />
              비대면으로 간편하게 계약하세요.
            </div>
          </button>
        </div>
      </Main>
    </Wrapper>
  )
}

SelectType.propTypes = {
  getType: PropTypes.node,
}
