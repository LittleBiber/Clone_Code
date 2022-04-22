import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/all.js'

const Main = styled.div`
  font-size: 11px;
  color: #b5b5b5;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .link_signin {
    font-size: 13px;
    line-height: 1.69;
    letter-spacing: -0.39px;
    text-align: center;
    color: #707070;
    // margin-top: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    a {
      color: #713838;
      text-decoration: underline;
    }
  }

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

export const Bottom = () => {
  return (
    <Main>
      <div className="link_signin">
        <span>이미 회원이신가요?</span>
        <a href="/signin">로그인</a>
      </div>
      <div className="rule">
        <img src="logo_footer.png" alt="footer" />
        <div className="text">
          <span>서비스 약관</span> <div /> <span>개인정보처리방침</span>
        </div>
      </div>
      <div className="copyright">
        COPYRIGHT © DONUE INC. ALL RIGHTS RESERVED.
      </div>
    </Main>
  )
}

Bottom.propTypes = {}
