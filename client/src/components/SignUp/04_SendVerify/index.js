import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

const Box = styled.div`
  width: 100%;
  background: #faf7ef;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  margin: 30px 0;

  .box_title {
    font-size: 18px;
    font-weight: 600;
    color: #713838;
    margin-bottom: 10px;
  }

  .box_desc {
    text-align: center;
    color: #713838;
    margin-bottom: 16px;
  }

  .user_email {
    display: flex;
    background: #ede4dd;
    width: 100%;
    text-align: center;
    height: 32px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #713838;
    font-weight: bold;
    border-radius: 16px;
  }
`

const Button = styled.div`
  width: 100%;
  height: 60px;
  background: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  transition: all 0.1s linear 0s;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 24px;

  :hover {
    background: #e3e3e3;
  }
`

const EmailFail = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-items: left;

  .email_fail_title {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;

    .icon {
      font-size: 24px;
      filter: invert(100%);

      :hover {
        filter: invert(0%);
      }

      :hover ~ .email_fail_desc {
        visibility: visible;
      }
    }
  }

  .email_fail_desc {
    visibility: hidden;
    padding: 8.3px;
    position: absolute;
    background: #713838;
    color: white;
    width: 290px;
    font-size: 14px;
    letter-spacing: -0.6px;
  }
`

export const SendVerify = ({ userData }) => {
  const resend = async () => {
    await axios.post(
      `http://localhost:8000/auth/signup?type=${userData.companyInfo ? 1 : 0}`,
      userData
    )
  }

  return (
    <Wrapper>
      <Main>
        <div className="type_title">인증 메일 전송</div>
        <Box>
          <div className="box_title">가입 인증 메일이 전송되었습니다.</div>
          <div className="box_desc">
            아래의 이메일로 전송된 링크를 통해
            <br />
            인증을 완료해주세요.
          </div>
          <div className="user_email">
            <div>{userData.email}</div>
          </div>
        </Box>
        <Button onClick={resend}>이메일 재전송</Button>
        <EmailFail>
          <div className="email_fail_title">
            <FontAwesomeIcon
              icon="fa-solid fa-circle-question"
              className="icon"
            />
            <span>이메일을 받지 못하셨나요?</span>
            <div className="email_fail_desc">
              1. 입력한 이메일이 정확한지 확인해주세요.
              <br /> 잘못 입력한 경우 회원가입을 다시 진행해주세요.
              <br /> 2. 네트워크 상태에 따라 이메일 전송이 실패될 수 있습니다.
              장시간 이메일이 오지 않을 경우
              <br /> 재전송 버튼을 통해 이메일을 재전송하세요.
            </div>
          </div>
        </EmailFail>
      </Main>
    </Wrapper>
  )
}

SendVerify.propTypes = {}
