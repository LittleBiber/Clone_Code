import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { NarrowAuth } from './NarrowAuth'

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;

  .auth_wrapper {
    transition: all 0.3s ease-in-out 0s;
    max-height: ${(props) => (props.checked ? '100%' : 0)};
    overflow: hidden;
    margin-top: 10px;
    padding; 10px 20px;

    position: fixed;
    top: 60px;
    left: 0px;
    z-index: 999;
    width: 100%;

    .auth_button {
      background: white;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 150px 20px;
      gap: 15px;
    }
  }
`

const Button = styled.div`
  font-size: 20px;
  width: 100%;
  height: 55px;
  border-radius: 4px;
  cursor: pointer;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.color ? props.color : 'white')};
  border: 1px solid ${(props) => (props.border ? props.border : props.color)};
  background: ${(props) => (props.back ? props.back : 'white')};
`

export const NarrowAuthList = ({ checked, user, signout }) => {
  const DATA_LIST = [
    {
      id: 'intro',
      head: { title: '서비스 소개', href: '#' },
      tail: [
        { title: '전자계약 소개', href: '#' },
        { title: '기업 솔루션 소개', href: '#' },
        { title: '전자 서명/도장 만들기', href: '#' },
      ],
    },
    {
      id: 'security',
      head: { title: '법적효력/보안', href: '#' },
      tail: [
        { title: '법적효력', href: '/legality' },
        { title: '보안', href: '#' },
      ],
    },
    {
      id: 'resource',
      head: { title: '리소스', href: '#' },
      tail: [
        { title: '고객 사례', href: '#' },
        { title: '블로그', href: '#' },
        { title: '사용 가이드', href: '#' },
      ],
    },
    {
      id: 'pricing',
      head: { title: '요금 안내', href: '/pricing' },
      tail: [],
    },
    {
      id: 'voucher',
      head: { title: '비대면 바우처', href: '/voucher' },
      tail: [],
    },
  ]

  return (
    <Main checked={checked}>
      <div className="auth_wrapper">
        {DATA_LIST.map((one, idx) => (
          <NarrowAuth {...one} key={idx} />
        ))}
        {!user ? (
          <div className="auth_button">
            <Link to="/signup">
              <Button back="#cd001a">
                <span>회원가입</span>
              </Button>
            </Link>
            <Link to="/signin">
              <Button color="#b5b5b5" border="#b5b5b5">
                <span>로그인</span>
              </Button>
            </Link>
          </div>
        ) : (
          <div className="auth_button">
            <Button back="#cd001a" onClick={signout}>
              로그아웃
            </Button>
          </div>
        )}
      </div>
    </Main>
  )
}

NarrowAuthList.propTypes = {}
