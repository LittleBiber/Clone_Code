import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FooterMenu } from './FooterMenu'
import { NarrowMenuList } from './NarrowMenuList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  width: 100%;
  background-color: #1a1515;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 991px) {
    padding: 0 20px 20px 20px;
  }
`

const Main = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  width: 100%;
  max-width: 1200px;

  .bar {
    width: 100%;
    height: 0px;
    border-top: 1px solid #333333;
    margin: 30px 0px 15px;

    @media (max-width: 991px) {
      display: none;
    }
  }
`

const Top = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`

const CompanyInfo = styled.div`
  font-family: SourceHanSansK-Regular;
  font-size: 11px;
  line-height: 1.5;
  text-align: left;
  color: #707070;
  margin-right: 28px;

  @media (max-width: 991px) {
    font-size: 11px;
  }
`

const Logo = styled.img`
  height: 16px;
  margin-bottom: 8px;

  @media (max-width: 991px) {
    display: none;
  }
`

const MenuList = styled.div`
  display: flex;
  align-items: start;
  justify-content: right;
  gap: 52px;

  @media (max-width: 991px) {
    display: none;
  }
`

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 11px;
  color: #707070;
  line-height: 1.45;
  align-items: center;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    font-size: 12px;
    gap: 15px;
  }

  .copyright {
    display: flex;
    align-items: center;
    margin-right: 20px;
    gap: 2px;
    align-items: center;
  }

  .terms {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      cursor: pointer;
    }

    div {
      width: 0px;
      height: 9px;
      margin: 0px 12px;
      border-right: 1px solid #707070;
    }
  }
`

const Sns = styled.div`
  display: flex;
  flex-direction: row;
  align-itmes: center;
  gap: 30px;
  margin-right: 30px;

  img {
    width: 24px;
    cursor: pointer;
  }

  @media (max-width: 991px) {
    margin: 30px 0;
  }
`

export const Footer = () => {
  const DATA_LIST = [
    {
      title: '서비스 소개',
      options: [
        { title: '전자계약 소개', href: '#' },
        { title: '기업 솔루션 소개', href: '#' },
        { title: '전자 서명/도장 만들기', href: '#' },
      ],
    },
    {
      title: '법적효력/보안',
      options: [
        { title: '법적효력', href: '/legality' },
        { title: '보안', href: '#' },
      ],
    },
    {
      title: '리소스',
      options: [
        { title: '고객 사례', href: '#' },
        { title: '블로그', href: '#' },
        { title: '사용 가이드', href: '#' },
      ],
    },
    {
      title: '요금 안내',
      options: [{ title: '요금 안내', href: '/pricing' }],
    },
    {
      title: '비대면 바우처',
      options: [{ title: '비대면 바우처', href: '/voucher' }],
    },

    {
      title: '고객지원',
      options: [
        { title: '자주 묻는 질문', href: '#' },
        { title: '공지사항', href: '#' },
      ],
    },
  ]

  return (
    <Wrapper>
      <Main>
        <Top>
          <CompanyInfo>
            <Logo src="logo_footer.png" alt="footer" />
            <div>
              주식회사 도뉴 <br />
              서울특별시 중구 퇴계로 10, 14층 <br />
              대표이사 : 김정완 <br />
              사업자등록번호 : 447-81-02244 <br />
              통신판매번호 : 2021-서울중구-1839 <br />
              이메일 : contact@donue.co.kr <br />
              전화번호 : 02-6250-5300
            </div>
          </CompanyInfo>
          <MenuList>
            {DATA_LIST.map((one, idx) => (
              <FooterMenu {...one} key={idx} />
            ))}
          </MenuList>
          <NarrowMenuList />
        </Top>
        <div className="bar" />
        <Bottom>
          <Info>
            <div className="copyright">
              <FontAwesomeIcon icon="fa-regular fa-copyright" />
              <div>Donue Inc.</div>
            </div>
            <div className="terms">
              <span>서비스약관</span>
              <div />
              <span>개인정보처리방침</span>
            </div>
          </Info>
          <Sns>
            {/* 네이버 블로그만 찾아도 Font Awesome으로 할 수 있는데 */}
            <img src="icon_blog.png" alt="blog" />
            <img src="icon_facebook.png" alt="facebook" />
            <img src="icon_linkedin.png" alt="linkedin" />
          </Sns>
        </Bottom>
      </Main>
    </Wrapper>
  )
}

PropTypes.propTypes = {}
