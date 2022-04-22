import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #faf7ef;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    align-items: center;
  }
`

const Main = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin-top: 70px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #faf7ef;
  align-items: center;

  img {
    height: 70%;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 0;

    img {
      height: 30%;
    }
  }
`

const Title = styled.div`
  font-family: SourceHanSansK-Bold;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.3;
  margin-bottom: 24px;
  word-break: keep-all;
  width: 500px;

  @media (max-width: 991px) {
    text-align: center;
    font-size: 28px;
    width: 350px;
    margin-bottom: 10px;
  }
`

const Description = styled.p`
  font-family: SourceHanSansK-Normal;
  line-height: 1.3;
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
  font-size: 22px;
  word-break: keep-all;
  width: 600px;

  @media (max-width: 991px) {
    font-size: 14px;
    width: 350px;
    text-align: center;
  }
`

const Button = styled.button`
  width: 180px;
  height: 50px;
  color: white;
  background-color: #cd001a;
  border-radius: 4px;

  :hover {
    background-color: #a20b0b;
    color: #f9ffff;
  }

  @media (max-width: 991px) {
    margin: 20px 0;
  }
`

const Img = styled.img`
  width: 600px;
`

const Sponsor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 5px;
  gap: 15px;
  margin-bottom: 20px;
  height: 30px;
  font-size: 10px;
  color: #a0a0a0;
  img {
    height: 25px;
  }

  @media (max-width: 991px) {
    img {
      height: 20px;
    }
  }
`

export const Discount = () => {
  return (
    <Wrapper>
      <Main>
        <Top>
          <Sponsor>
            <div>
              <img src="kvoucher_logo1.png" alt="중소벤처기업부" />
            </div>
            <div>
              <FontAwesomeIcon icon="fa-solid fa-x" />
            </div>
            <div>
              <img src="kvoucher_logo2.png" alt="DONUE" />
            </div>
          </Sponsor>
          <Title>70% 할인된 가격으로 전자계약 도뉴를 만나보세요!</Title>
          <Top>
            <Description>
              비대면 서비스 바우처 수요기업 지원을 희망하는 기업이라면 신청방법
              안내 및 도뉴 도입을 도와드립니다.
            </Description>
            <Button>문의하기</Button>
          </Top>
        </Top>
        <Img src="kvoucher.png" alt="kvoucher" />
      </Main>
    </Wrapper>
  )
}

Discount.propTypes = {}
