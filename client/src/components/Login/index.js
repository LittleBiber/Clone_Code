import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Title = styled.div`
  user-select: none;
  color: #1e1e1e;
  font-size: 26px;
  font-weight: bold;
  line-height: 1.09;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  width: 100%;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 24px;
`

const LoginNotAllowed = styled.div`
  user-select: none;
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
  user-select: none;
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

const Body = styled.div`
  border-radius: 4px;
  background-color: white;
  width: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  margin: 50px 0 20px;

  .input_email,
  .input_password {
    height: 65px;
    width: 100%;

    input {
      transition: linear 0s, padding 0.2s linear 0s;
      font-size: 14px;
      padding: 8px 12px;
      border: 1px solid #b5b5b5;
      width: 100%;
      height: 42px;
      ${(props) =>
        props.error === true
          ? `border: 1px solid #c12929;`
          : `border: 1px solid #b5b5b5;`}

      :focus {
        border: 1px solid black;
      }
    }

    .error {
      color: #c12929;
      padding-left: 5px;
      font-size: 14px;
    }
  }
`

const Find = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  color: #999999;
  align-items: center;
  padding: 10px 0 20px;
  font-size: 14px;

  .bar_vertical {
    width: 1px;
    background-color: #999999;
    height: 12px;
    align-items: center;
  }

  .findpassword,
  .signup {
    user-select: none;
    cursor: pointer;
  }
`

const OR = styled.div`
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 15px;

  color: #999999;
  font-size: 14px;

  margin-bottom: 30px;

  .bar_horizontal {
    height: 1px;
    width: 115px;
    background-color: #dddddd;
  }
`

const OAUTH = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;

  .button_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`

const Button = styled.button`
  width: 100%;
  max-width: 
  height: 45px;
  margin: 0px;
  padding: 5px 20px;
  ${(props) => (props.bgcolor ? `background: ${props.bgcolor}` : '')};
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  ${(props) => (props.border ? `border: 1px solid ${props.border}` : '')};
  border-radius: 4px;

  ${(props) =>
    props.bgimg
      ? `
    background-image: url('${props.bgimg}');
    background-size: cover;
    `
      : ``}

  display: flex;
  flex-direction: row;
  align-items: center;

  .button_title {
    font-size: 20px;
    font-weight: 600;

    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  :hover {
    filter: brightness(95%);
  }

  img {
    width: 22px;
  }

  div {
    position: relative;
    left: 70px;
  }
`

const Bottom = styled.div`
  margin-top: 40px;
  // max-width: 320px;
  font-size: 11px;
  color: #b5b5b5;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .rule {
    display: flex;
    align-items: center;
    color: #b5b5b5;

    img {
      height: 14px;
    }

    .text {
      gap: 12px;
      margin-left: 5px;
      display: flex;
      align-items: center;

      font-size: 11px;
      font-weight: 500;
      vertical-align: middle;
      color: #b5b5b5;
      user-select: none;

      div {
        height: 9px;
        background-color: grey;
        width: 1px;
      }

      span {
        cursor: pointer;
      }
    }
  }

  .copyright {
    font-size: 10px;
    color: #b5b5b5;
    user-select: none;
  }
`

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = async () => {
    setError('')
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/

    if (regEmail.test(email)) {
      try {
        await axios.post(
          'http://localhost:8000/auth/signin',
          {
            email,
            password,
          },
          { withCredentials: true }
        )
        window.location.href = '/voucher'
      } catch (err) {
        return setError('unauthorized')
      }
    } else {
      return setError('email')
    }
  }

  return (
    <div>
      <Body>
        <Title>로그인</Title>
        <div className="input_email">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
          />
          <div className="error">
            {error === 'email' ? '올바른 이메일을 입력해주세요.' : ''}
          </div>
        </div>
        <div className="input_password">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
          <div className="error">
            {error === 'unauthorized'
              ? '아이디 혹은 비밀번호가 일치하지 않습니다.'
              : ''}
          </div>
        </div>

        {!(password && email) ? (
          <LoginNotAllowed>로그인</LoginNotAllowed>
        ) : (
          <LoginButton onClick={submit}>로그인</LoginButton>
        )}

        <Find>
          <div className="findpassword">비밀번호 찾기</div>
          <div className="bar_vertical" />
          <div className="signup">회원가입</div>
        </Find>

        <OR>
          <div className="bar_horizontal" />
          <div>또는</div>
          <div className="bar_horizontal" />
        </OR>
        <OAUTH>
          <div className="button_wrapper">
            <Button color="#707070" border="#707070" bgcolor="white">
              <img src="google.svg" alt="google" />
              <div>구글로 로그인</div>
            </Button>
            <Button bgcolor="#fee500" border="#fee500">
              <img src="kakao.svg" alt="kakao" />
              <div>카카오톡으로 로그인</div>
            </Button>
            <Button bgimg="mykeypin_background.svg" color="white">
              <img src="mykeypin.svg" alt="mykeypin" />
              <div>마이키핀으로 로그인</div>
            </Button>
          </div>
        </OAUTH>
      </Body>
      <Bottom>
        <div className="rule">
          <img src="logo_footer.png" alt="footer" />
          <div className="text">
            <span>서비스 약관</span> <div /> <span>개인정보처리방침</span>
          </div>
        </div>
        <div className="copyright">
          COPYRIGHT © DONUE INC. ALL RIGHTS RESERVED.
        </div>
      </Bottom>
    </div>
  )
}

Login.propTypes = {}
