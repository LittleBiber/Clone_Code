import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  width: 100%;
`

const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 1.5 1 0%;
  background-color: #f8f8f8;
  padding: 80px 0;
  align-items: center;
  gap: 30px;

  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
  }
`

const Title = styled.div`
  font-family: SourceHanSansK-Bold;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.3;
  margin-bottom: 30px;

  @media (max-width: 991px) {
    font-size: 26px;
  }
`

const Description = styled.p`
  font-family: SourceHanSansK-Normal;
  line-height: 1.3;
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
  font-size: 18px;

  @media (max-width: 991px) {
    font-size: 16px;
  }
`

const OutLink = styled.span`
  font-family: SourceHanSansK-Normal;
  line-height: 1.3;
  margin-bottom: 1.2rem;
  color: #713838;
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  span {
    margin-right: 4px;
  }

  @media (max-width: 991px) {
    font-size: 16px;
  }
`

const Img = styled.img`
  width: 50%;
  max-width: 670px;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 90%;
  }
`

export const Guarantee = () => {
  return (
    <Wrapper>
      <Main>
        <div>
          <Title>
            전자 서명/도장도
            <br />
            동일한 법적 효력을
            <br />
            보장받습니다.
          </Title>
          <div>
            <Description>
              전자서명법 제 3조 1항 2항에 의거하여
              <br /> 도뉴에서 사용하는 전자서명 및 도장은 실물 서명 및 도장과
              <br /> 동일한 법적 효력을 인정받습니다.
            </Description>
            <Description>
              기존에 사용하고 있는 서명과 도장의 이미지를 업로드하여
              <br /> 도뉴에서 쉽고 빠른 계약이 가능합니다.
            </Description>
            <Description>
              도뉴에서 나만의 전자 서명 및 도장을 무료로 만들어 보세요.
            </Description>
            <OutLink>
              <span>나만의 전자 서명/도장 만들기</span>
              <FontAwesomeIcon icon={faAngleDown} className="angle-down" />
            </OutLink>
          </div>
        </div>
        <Img src="desc.png" alt="banner" />
      </Main>
    </Wrapper>
  )
}

Guarantee.propTypes = {}
