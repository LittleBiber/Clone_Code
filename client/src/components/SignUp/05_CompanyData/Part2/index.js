import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
    height: 90px;
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

const Terms = styled.div`
  width: 100%;
  margin-bottom: 30px;

  input {
    width: 20px;
    height: 20px;
  }

  label {
    cursor: pointer;
  }

  .terms_all {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .terms_split {
    border: 1px solid #999999;
    border-radius: 4px;
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .term {
      display: flex;
      font-size: 15px;
      gap: 4px;
      align-item: center;

      label {
        display: flex;
        flex-direction: row;
        gap: 5px;

        .required {
          color: #c12929;
        }
        .non_required {
          color: #999999;
        }
      }
    }
  }
`

const LoginNotAllowed = styled.div`
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

export const Part2 = ({ companyData, setData, setValue }) => {
  const [error, setError] = useState(null)
  const [userData, setUserData] = useState({
    name: null,
    email: null,
    password: null,
    chk_password: null,
    company_id: null,
  })

  const [chkbox, setChkbox] = useState([false, false, false])

  const [signUpReady, setSignUpReady] = useState(false)

  const handleAllChkbox = () => {
    if (chkbox.every((one) => one === true)) {
      setChkbox([false, false, false])
    } else {
      setChkbox([true, true, true])
    }
  }

  const handleOneChkbox = (id) => {
    const newState = [...chkbox]
    newState[id] = !chkbox[id]
    setChkbox(newState)
  }

  const InputValue = (event) => {
    const newData = { ...userData }
    newData[event.target.id] = event.target.value
    setUserData(newData)
  }

  const ValidateName = () => {
    const { name } = userData

    if (typeof name === 'object') return [false, <div className="error" />]
    else if (name.length === 0)
      return [false, <div className="error">이름을 입력해 주세요.</div>]
    else return [true, <div className="error" />]
  }

  const ValidateEmail = () => {
    const { email } = userData
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/

    if (error === 409) {
      return [false, <div className="error">이미 가입된 이메일입니다.</div>]
    }

    if (typeof email === 'object') return ''
    else if (email.length === 0)
      return [false, <div className="error">이메일을 입력해 주세요.</div>]
    else if (!email.match(regEmail)) {
      return [false, <div className="error">올바른 이메일을 입력해주세요.</div>]
    } else {
      return [true, <div className="error" />]
    }
  }

  const ValidateCompnayId = () => {
    const { company_id } = userData

    if (typeof company_id === 'object') return ''
    else if (company_id.length === 0)
      return [
        false,
        <div className="error">사업자등록번호를 입력해주세요.</div>,
      ]

    const numberMap = company_id
      .replace(/-/gi, '')
      .split('')
      .map(function (d) {
        return parseInt(d, 10)
      })

    if (numberMap.length === 10) {
      const keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5]
      let chk = 0

      keyArr.forEach(function (d, i) {
        chk += d * numberMap[i]
      })

      chk += parseInt((keyArr[8] * numberMap[8]) / 10, 10)

      if (Math.floor(numberMap[9]) === (10 - (chk % 10)) % 10)
        return [true, <div className="error" />]
    } else {
      return [
        false,
        <div className="error">
          입력하신 사업자등록번호가 유효하지 않습니다.
        </div>,
      ]
    }
  }

  const ValidatePassword = () => {
    const { password } = userData
    const passExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/

    if (typeof password === 'object') return ''
    else if (password.length === 0)
      return [false, <div className="error">비밀번호를 입력해 주세요.</div>]
    else if (password.length >= 4 && !password.match(passExp)) {
      return [
        false,
        <div className="error">
          영문/숫자/특수문자 조합 8자 이상으로 설정하세요.
        </div>,
      ]
    } else {
      return [true, <div className="error" />]
    }
  }

  const CheckPassword = () => {
    const { password, chk_password } = userData
    if (typeof chk_password === 'object')
      return [false, <div className="error" />]
    else if (chk_password.length === 0)
      return [
        false,
        <div className="error">비밀번호를 다시 한 번 입력해주세요.</div>,
      ]
    else if (password !== chk_password)
      return [false, <div className="error">비밀번호가 일치하지 않습니다.</div>]
    else return [true, <div className="error" />]
  }

  const CheckTerms = () => {
    if (chkbox[0] && chkbox[1]) return true
    else return false
  }

  const CheckSignup = () => {
    return ValidateEmail()[0] &&
      ValidateName()[0] &&
      ValidateCompnayId()[0] &&
      ValidatePassword()[0] &&
      CheckPassword()[0] &&
      CheckTerms()
      ? setSignUpReady(true)
      : setSignUpReady(false)
  }

  const PostSignUp = async () => {
    const postData = { ...userData }
    delete postData.chk_password
    postData.companyInfo = companyData

    try {
      const result = await axios.post(
        'http://localhost:8000/auth/signup?type=1',
        postData
      )

      console.log(result)

      setData(postData)
      setValue('verfiy')
    } catch (err) {
      console.dir(err)

      if (err.response.status === 409) {
        setError(409)
      }
    }
  }

  useEffect(() => {
    setError(null)
    CheckSignup()
  }, [chkbox, userData])

  return (
    <Wrapper>
      <Main>
        <div className="type_title">기업 회원가입</div>
        <div className="type_desc">
          <span className="select_type">회원 정보</span>
        </div>
        <UserInfo>
          <div className="data">
            <div className="data_name">이름</div>
            <input onChange={InputValue} id="name" />
            {ValidateName()[1]}
          </div>
          <div className="data">
            <div className="data_name">이메일</div>
            <input onChange={InputValue} id="email" />
            {ValidateEmail()[1]}
          </div>
          <div className="data">
            <div className="data_name">사업자등록번호</div>
            <input onChange={InputValue} id="company_id" />
            {ValidateCompnayId()[1]}
          </div>
          <div className="data">
            <div className="data_name">비밀번호</div>
            <input type="password" onChange={InputValue} id="password" />
            {ValidatePassword()[1]}
          </div>
          <div className="data">
            <div className="data_name">비밀번호 확인</div>
            <input type="password" onChange={InputValue} id="chk_password" />
            {CheckPassword()[1]}
          </div>
        </UserInfo>
        <Terms>
          <div className="terms_all">
            <input
              type="checkbox"
              id="all"
              checked={CheckTerms()}
              onClick={handleAllChkbox}
            />
            <label htmlFor="all">전체 약관 동의</label>
          </div>
          <div className="terms_split">
            <div className="term">
              <input
                checked={chkbox[0]}
                onClick={() => handleOneChkbox(0)}
                type="checkbox"
                id="age"
              />
              <div>
                <label htmlFor="age">
                  <span className="required">[필수]</span>만 14세 이상
                </label>
              </div>
            </div>
            <div className="term">
              <input
                checked={chkbox[1]}
                onClick={() => handleOneChkbox(1)}
                type="checkbox"
                id="term_a"
              />
              <div>
                <label htmlFor="term_a">
                  <span className="required">[필수]</span>서비스 약관 및
                  개인정보처리방침 동의
                </label>
              </div>
            </div>
            <div className="term">
              <input
                checked={chkbox[2]}
                onClick={() => handleOneChkbox(2)}
                type="checkbox"
                id="term_b"
              />
              <div>
                <label htmlFor="term_b">
                  <span className="non_required">[선택]</span>마케팅 및 정보
                  동의
                </label>
              </div>
            </div>
          </div>
        </Terms>
        {signUpReady ? (
          <LoginButton onClick={() => PostSignUp()}>가입하기</LoginButton>
        ) : (
          <LoginNotAllowed>가입하기</LoginNotAllowed>
        )}
      </Main>
    </Wrapper>
  )
}

Part2.propTypes = {}
