import React from 'react'
import styled from 'styled-components'
import { NarrowMenu } from './NarrowMenu'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 0px 50px;

  .footer_narrow_logo {
    height: 20px;
    margin: 20px 0;
  }

  @media (min-width: 991px) {
    display: none;
  }
`

export const NarrowMenuList = () => {
  const NARROW_MENU_LIST = [
    {
      id: 'footer_intro',
      head: { title: '서비스 소개', href: '#' },
      tail: [
        { title: '전자계약 소개', href: '#' },
        { title: '기업 솔루션 소개', href: '#' },
        { title: '전자 서명/도장 만들기', href: '#' },
      ],
    },
    {
      id: 'footer_security',
      head: { title: '법적효력/보안', href: '#' },
      tail: [
        { title: '법적효력', href: '/legality' },
        { title: '보안', href: '#' },
      ],
    },
    {
      id: 'footer_resource',
      head: { title: '리소스', href: '#' },
      tail: [
        { title: '고객 사례', href: '#' },
        { title: '블로그', href: '#' },
        { title: '사용 가이드', href: '#' },
      ],
    },
    {
      id: 'footer_pricing',
      head: { title: '요금 안내', href: '/pricing' },
      tail: [],
    },
    {
      id: 'footer_voucher',
      head: { title: '비대면 바우처', href: '/voucher' },
      tail: [],
    },
    {
      id: 'footer_customer',
      head: { title: '고객지원', href: '#' },
      tail: [
        { title: '자주 묻는 질문', href: '#' },
        { title: '공지사항', href: '#' },
      ],
    },
  ]

  return (
    <Wrapper>
      <img
        src="logo_footer.png"
        alt="footer_logo"
        className="footer_narrow_logo"
      />
      {NARROW_MENU_LIST.map((one, idx) => (
        <NarrowMenu {...one} key={idx} />
      ))}
    </Wrapper>
  )
}

NarrowMenuList.propTypes = {}
