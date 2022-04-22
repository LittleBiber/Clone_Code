import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Selection } from './Selection'

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
    padding: 20px 0 10px;

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

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .data {
    margin: 5px 0;

    .member_count {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  .data_name {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 4px;
  }

  input {
    border: 1px solid black;
    width: 100%;
    height: 35px;
    margin: 10px 0;
  }

  input[type='radio'] {
    appearance: none;
    width: 20px;
    height: 20px;
    outline: none;
    flex-shrink: 0;
    border-radius: 50%;
    margin: 0px 8px 0px 0px;
    background-image: url(/radio_button2.svg);
    vertical-align: middle;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;

    :checked {
      background-image: url(/radio_button1.svg);
    }
  }

  .check {
    border: 1px solid red;
  }

  .error {
    color: #c12929;
    font-size: 14px;
    padding: 4px 0 0 4px;
    animation: fadein 1s;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    // name | duration | timing-function | delay | iteration-count | direction | fill-mode | play-state> [,...];
  }
`

const LoginNotAllowed = styled.div`
  margin-top: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  transition: all 0.1s linear 0s;
  padding: 12px;
  font-size: 16px;
  width: 100%;
  height: 48px;
  text-align: center;
  pointer-events: none;
  background-color: #dddddd;
  color: #999999;
`

const LoginButton = styled.button`
  margin-top: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  transition: all 0.1s linear 0s;
  padding: 12px;
  font-size: 16px;
  width: 100%;
  height: 48px;
  text-align: center;
  cursor: pointer;
  background-color: #713838;
  color: white;

  :hover {
    background-color: #552c2c;
  }
`

export const Part1 = ({ setValue, setData }) => {
  const [userData, setUserData] = useState({
    name: null,
    industry_type: null,
    member_count: null,
    purpose: null,
  })

  const [signUpReady, setSignUpReady] = useState(false)

  const InputValue = (event) => {
    const newData = { ...userData }

    console.log(event)

    newData[event.target.id] = event.target.value
    setUserData(newData)
  }

  const ValidateName = () => {
    const { name } = userData

    if (typeof name === 'object') return [false, <div className="error" />]
    else if (name.length === 0)
      return [false, <div className="error">기업명을 입력해주세요.</div>]
    else return [true, <div className="error" />]
  }

  const ValidateType = () => {
    const { industry_type } = userData

    if (typeof industry_type === 'object')
      return [false, <div className="error" />]
    else if (industry_type.length === 0)
      return [false, <div className="error">산업군을 선택해주세요.</div>]
    else return [true, <div className="error" />]
  }

  const ValidateMember = () => {
    const { member_count } = userData

    if (typeof member_count === 'object')
      return [false, <div className="error" />]
    else if (member_count.length === 0)
      return [
        false,
        <span className="error">필요 그룹원 수를 선택해주세요.</span>,
      ]
    else return [true, <div className="error" />]
  }

  const CheckSignup = () => {
    return ValidateName()[0] && ValidateType()[0] && ValidateMember()[0]
      ? setSignUpReady(true)
      : setSignUpReady(false)
  }

  const NextStep = () => {
    setData(userData)
    setValue('enterprise_02')
  }

  useEffect(() => {
    CheckSignup()
    console.log(userData)
  }, [userData])

  return (
    <Wrapper>
      <Main>
        <div className="type_title">기업 회원가입</div>
        <div className="type_desc">
          <span className="select_type">회원 정보</span>
        </div>
        <UserInfo>
          <div className="data">
            <div className="data_name">기업명</div>
            <input className="input_text" onChange={InputValue} id="name" />
            {ValidateName()[1]}
          </div>
          <div className="data">
            <div className="data_name">산업군</div>
            <Selection
              InputValue={InputValue}
              data={[
                'industry_type',
                '산업군을 선택해주세요',
                [
                  '농업, 임업 및 어업',
                  '광업',
                  '제조업',
                  '전기, 가스, 증기 및 공기조절공급업',
                  '수도, 하수 및 폐기물 처리, 원료 재생업',
                  '건설업',
                  '도매 및 소매업',
                  '운수 및 창고업',
                  '숙박 및 음식점업',
                  '정보통신업',
                  '금융 및 보험업',
                  '부동산업',
                  '전문, 과학 및 기술서비스업',
                  '사업시설 관리, 사업 지원 및 임대 서비스업',
                  '공공행정, 국방 및 사회보장 행정',
                  '교육서비스',
                  '보건업 및 사회복지 서비스업',
                  '예술, 스포츠 및 여가관련 서비스업',
                  '협회 및 단체, 수리 및 기타 개인 서비스업',
                  '가구 내 고용활동, 자가소비 생산활동',
                  '국제 및 외국기관',
                ],
              ]}
            />
          </div>
          <div className="data">
            <div className="data_name">필요 그룹원 수</div>
            <div className="member_count">
              <span>
                <input
                  id="member_count"
                  type="radio"
                  name="member_count"
                  value="1~10명"
                  onClick={InputValue}
                />
                <label htmlFor="member_type1">1~10명</label>
              </span>
              <span>
                <input
                  id="member_count"
                  type="radio"
                  name="member_count"
                  value="10~50명"
                  onClick={InputValue}
                />
                <label htmlFor="member_type2">10~50명</label>
              </span>
              <span>
                <input
                  id="member_count"
                  type="radio"
                  name="member_count"
                  value="50~100명"
                  onClick={InputValue}
                />
                <label htmlFor="member_type3">50~100명</label>
              </span>
              <span>
                <input
                  id="member_count"
                  type="radio"
                  name="member_count"
                  value="100명 이상"
                  onClick={InputValue}
                />
                <label htmlFor="member_type4">100명 이상</label>
              </span>
            </div>
          </div>
          <div className="data">
            <div className="data_name">
              전자계약 사용 목적<span>(선택)</span>
            </div>
            <Selection
              InputValue={InputValue}
              data={[
                'purpose',
                '전자계약 사용 목적을 선택해주세요.',
                [
                  '기업 내 전자계약 솔루션 도입',
                  '자체 시스템 내 API/SDK 도입',
                  '대량전송 기능 필요',
                  '기타(선택 입력)',
                ],
              ]}
            />
            {[
              '기업 내 전자계약 솔루션 도입',
              '자체 시스템 내 API/SDK 도입',
              '대량전송 기능 필요',
            ].includes(userData.purpose) ? (
              ''
            ) : (
              <input
                id="purpose"
                className="input_text"
                placeholder="기타 내용을 입력해주세요."
                onChange={InputValue}
              />
            )}
          </div>
        </UserInfo>
        {signUpReady ? (
          <LoginButton onClick={NextStep}>다음</LoginButton>
        ) : (
          <LoginNotAllowed>다음</LoginNotAllowed>
        )}
      </Main>
    </Wrapper>
  )
}

Part1.propTypes = {}
