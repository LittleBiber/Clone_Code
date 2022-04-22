import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: 0;
  margin-top: 70px;

  position: reslative;
  overflow: hidden;
  height: 400px;
  background-image: url('banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .title {
    text-align: center;
    color: white;
    margin: 0px;
    padding: 0px 0px 16px;
    font-size: 42px;
    font-weight: bold;
    line-height: 1.3;
  }

  .desc {
    text-align: center;
    color: white;
    margin: 0px;
    padding: 0px;
    font-size: 20px;
    line-height: 1.3;
  }

  @media (max-width: 991px) {
    max-height: 320px;

    .title {
      font-size: 30px;
      word-break: keep-all;
      width: 230px;
    }

    .desc {
      font-size: 16px;
      word-break: keep-all;
      width: 270px;
    }
  }
`

export const Banner = () => {
  return (
    <Main>
      <div className="title">서면 계약과 동일한 법적 효력</div>
      <div className="desc">
        국가에서 보장하는 전자계약 법령으로 시간과 비용을 절감하세요.
      </div>
    </Main>
  )
}

Banner.propTypes = {}
