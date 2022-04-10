import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 1.5 1 0%;
  background-color: #f8f8f8;
  padding-top: 2rem;
`

const Title = styled.div`
  font-family: SourceHanSansK-Bold;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.3;
  margin-bottom: 2rem;
`

const Description = styled.p`
  font-family: SourceHanSansK-Normal;
  line-height: 1.3;
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
`

const OutLink = styled.span`
  font-family: SourceHanSansK-Normal;
  line-height: 1.3;
  margin-bottom: 1.2rem;
  color: #713838;
  font-weight: 500;
  cursor: pointer;
`

const Img = styled.img`
  width: 600px;
`

export const Guarantee = () => {
  return (
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
          <OutLink>나만의 전자 서명/도장 만들기</OutLink>
        </div>
      </div>
      <Img src="desc.png" alt="banner" />
    </Main>
  )
}

Guarantee.propTypes = {}
