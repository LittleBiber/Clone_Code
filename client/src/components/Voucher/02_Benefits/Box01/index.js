import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  max-width: 904px;
`

const Box = styled.div`
  max-height: 93px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 33px 60px;
  gap: 66px;

  @media (max-width: 991px) {
    padding: 21px;
  }
`

const Title = styled.div`
  width: 100%;
  max-width: 80px;
  font-family: SourceHanSansK-Bold;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: -0.18px;
  text-align: left;
  color: #6591da;
  white-space: pre-line;

  @media (max-width: 991px) {
    font-size: 12px;
    width: 50px;
  }
`

const Desc = styled.div`
  font-family: SourceHanSansK-Medium;
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: -0.66px;
  text-align: left;
  color: #1e1e1e;
  white-space: normal;
  display: flex;
  align-items: center;

  a {
    color: black;
    text-decoration: underline;
  }

  @media (max-width: 991px) {
    font-size: 14px;
  }
`

const DescSub = styled.div`
  font-family: SourceHanSansK-Normal;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.54px;
  text-align: left;
  color: #999999;

  @media (max-width: 991px) {
    font-size: 14px;
  }
`

export const Box01 = () => {
  return (
    <Main>
      <Box>
        <Title>대상</Title>
        <Desc>
          전국 중소기업
          <DescSub></DescSub>
        </Desc>
      </Box>
      <Box>
        <Title>지원 금액</Title>
        <Desc>
          4,000,000원
          <DescSub>(자부담 30% 포함, VAT 별도)</DescSub>
        </Desc>
      </Box>
      <Box>
        <Title>수요기업 신청 기간</Title>
        <Desc>
          2022년 4월 1일 ~ 4월 14일
          <DescSub></DescSub>
        </Desc>
      </Box>
      <Box>
        <Title>수요기업 신청 방법</Title>
        <Desc>
          <a href="https://www.k-voucher.kr" target="_blank">
            K-비대면바우처플랫폼
          </a>
          에 접속하여 수요기업 신청
          <DescSub></DescSub>
        </Desc>
      </Box>
    </Main>
  )
}

Box01.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  sub_desc: PropTypes.string,
}
