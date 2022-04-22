import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/all.js'

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
    margin-bottom: 30px;
  }

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
  height: 45px;
  margin: 0px;
  padding: 5px 20px;

  background: ${(props) => (props.bgcolor ? props.bgcolor : 'white')};
  color: ${(props) => (props.color ? props.color : 'black')};
  border: 1px solid ${(props) => (props.color ? props.color : 'grey')};
  border-radius: 2px;

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

const Or = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #999999;
  padding: 20px 0;
  font-size: 14px;

  .bar {
    width: 140px;
    height: 1px;
    background: #dddddd;
  }
`

export const SelectOauth = ({ setValue }) => {
  useEffect(() => {
    window.history.pushState('', null, `?type=0`)
  })

  return (
    <Wrapper>
      <Main>
        <div className="type_title">개인 회원가입</div>

        <div className="button_wrapper">
          <Button color="#707070">
            <img src="google.svg" alt="google" />
            <div>구글로 가입하기</div>
          </Button>
          <Button bgcolor="#fee500" border="#fee500">
            <img src="kakao.svg" alt="kakao" />
            <div>카카오톡으로 가입하기</div>
          </Button>
          <Button bgimg="mykeypin_background.svg" color="white">
            <img src="mykeypin.svg" alt="mykeypin" />
            <div>마이키핀으로 가입하기</div>
          </Button>
        </div>

        <Or>
          <div className="bar" />
          <div>또는</div>
          <div className="bar" />
        </Or>
        <Button color="#707070" onClick={() => setValue('email')}>
          <img src="email.svg" alt="email" />
          <div>이메일로 가입하기</div>
        </Button>
      </Main>
    </Wrapper>
  )
}

SelectOauth.propTypes = { getType: PropTypes.node }
