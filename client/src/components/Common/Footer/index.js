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
      title: '????????? ??????',
      options: [
        { title: '???????????? ??????', href: '#' },
        { title: '?????? ????????? ??????', href: '#' },
        { title: '?????? ??????/?????? ?????????', href: '#' },
      ],
    },
    {
      title: '????????????/??????',
      options: [
        { title: '????????????', href: '/legality' },
        { title: '??????', href: '#' },
      ],
    },
    {
      title: '?????????',
      options: [
        { title: '?????? ??????', href: '#' },
        { title: '?????????', href: '#' },
        { title: '?????? ?????????', href: '#' },
      ],
    },
    {
      title: '?????? ??????',
      options: [{ title: '?????? ??????', href: '/pricing' }],
    },
    {
      title: '????????? ?????????',
      options: [{ title: '????????? ?????????', href: '/voucher' }],
    },

    {
      title: '????????????',
      options: [
        { title: '?????? ?????? ??????', href: '#' },
        { title: '????????????', href: '#' },
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
              ???????????? ?????? <br />
              ??????????????? ?????? ????????? 10, 14??? <br />
              ???????????? : ????????? <br />
              ????????????????????? : 447-81-02244 <br />
              ?????????????????? : 2021-????????????-1839 <br />
              ????????? : contact@donue.co.kr <br />
              ???????????? : 02-6250-5300
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
              <span>???????????????</span>
              <div />
              <span>????????????????????????</span>
            </div>
          </Info>
          <Sns>
            {/* ????????? ???????????? ????????? Font Awesome?????? ??? ??? ????????? */}
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
