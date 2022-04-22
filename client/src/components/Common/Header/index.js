import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './Button'
import { DropdownMenu } from './DropdownMenu'
import { NarrowAuthList } from './NarrowAuthList'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 999;
  background: white;

  @media (max-width: 991px) {
    border-bottom: 1px solid #efefef;
    box-shadow: rgb(0 0 0 / 6%) 0px 3px 3px 0px;
  }
`

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  max-width: 1200px;
  padding: 0px 20px;
  align-items: center;
  justify-content: space-between;

  .auth_wide {
    display: flex:
    flex-direction: column;
    width: 165px;

    @media (max-width: 991px)  {
        display: none;
    }
  }

  .auth_narrow {

    display: none;
    font-size: 25px;

    @media (max-width: 991px) {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    #menu_narrow {
      display: none;
    }
  }

`

const Logo = styled.img`
  cursor: pointer;
  width: 120px;
`

const MenuList = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 991px) {
    display: none;
  }
`

const SignoutButton = styled.button`
  padding: 0;
  margin: 0;
  font-weight: 500;
  border: 1px solid #cd001a;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: #cd001a;
  font-size: 16px;
  padding: 11px 6px;
  width: 76px;
  margin-left: 5px;
  text-align: center;
  :hover {
    background-color: #a20b0b;
    color: #f9ffff;
  }

  @media (max-width: 991px) {
    display: none;
  }
`

export const Header = () => {
  const [user, setUser] = useState(null)
  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked(!checked)
  }

  const DATA_LIST = [
    {
      title: '서비스 소개',
      nav_title: '#',
      options: [
        { title: '전자계약 소개', href: '#' },
        { title: '기업 솔루션 소개', href: '#' },
        { title: '전자 서명/도장 만들기', href: '#' },
      ],
    },
    {
      title: '법적효력/보안',
      nav_title: '#',
      options: [
        { title: '법적효력', href: '/legality' },
        { title: '보안', href: '#' },
      ],
    },
    {
      title: '리소스',
      nav_title: '#',
      options: [
        { title: '고객 사례', href: '#' },
        { title: '블로그', href: '#' },
        { title: '사용 가이드', href: '#' },
      ],
    },
    { title: '요금 안내', nav_title: '/pricing' },
    { title: '비대면 바우처', nav_title: '/voucher' },
  ]

  const getUserInfo = async () => {
    const userData = await axios.get('http://localhost:8000/user', {
      withCredentials: true,
    })
    setUser(userData.data)
  }

  const signout = async () => {
    const result = await axios.get('http://localhost:8000/auth/signout', {
      withCredentials: true,
    })

    if (result.status === 200) setUser(null)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <Wrapper>
      <Main>
        <div className="logo_wrapper">
          <Logo src="logo.png" alt="logo" className="logo" />
        </div>
        <MenuList>
          {DATA_LIST.map((one, idx) => (
            <DropdownMenu {...one} key={idx} />
          ))}
        </MenuList>
        {!user ? (
          <div className="auth_wide">
            <Button type={true} />
            <Button type={false} />
          </div>
        ) : (
          <SignoutButton onClick={signout}>로그아웃</SignoutButton>
        )}
        <div className="auth_narrow">
          <div>
            <input
              type="checkbox"
              id="menu_narrow"
              onClick={() => handleCheck()}
            />
            <label htmlFor="menu_narrow" className="menu_icon">
              {checked ? (
                <FontAwesomeIcon icon="fa-solid fa-x" />
              ) : (
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              )}
            </label>
          </div>
        </div>
      </Main>
      <NarrowAuthList checked={checked} user={user} signout={signout} />
    </Wrapper>
  )
}

PropTypes.propTypes = {}
