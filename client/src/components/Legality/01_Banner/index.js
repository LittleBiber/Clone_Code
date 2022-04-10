import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1.5 1 0%;

  position: relative;
  overflow: hidden;
  height: 400px;
  background-image: url('banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .title {
    font-family: SourceHanSansK-Bold;
    text-align: center;
    color: rgb(255, 255, 255);
    margin: 0px;
    padding: 0px 0px 16px;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
  }

  .desc {
    font-family: SourceHanSansK-Normal;
    text-align: center;
    color: rgb(255, 255, 255);
    margin: 0px;
    padding: 0px;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
  }
`

const BannerImg = styled.img``

export const Banner = () => {
  return (
    <BannerWrapper>
      <div className="title">서면 계약과 동일한 법적 효력</div>
      <div className="desc">
        국가에서 보장하는 전자계약 법령으로 시간과 비용을 절감하세요.
      </div>
    </BannerWrapper>
  )
}

Banner.propTypes = {}
