import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Banner } from './Banner'

const Main = styled.div`
  width: 100%;
  max-width: 1220px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 170px 0px 160px;
  position: relative;
  background-color: white;

  @media (max-width: 991px) {
    margin: 130px 0px 40px;
  }

  .title {
    text-align: center;
    font-size: 35px;
    font-weight: bold;

    @media (max-width: 991px) {
      font-size: 26px;
      width: 230px;
      line-height: 30px;
      word-break: keep-all;
    }
  }
`

export const Partners = () => {
  return (
    <Main>
      <div className="title">
        이미 다양한 기업에서
        <br />
        전자계약 도뉴를 사용하고 있습니다.
      </div>
      <Banner />
    </Main>
  )
}

Partners.propTypes = {}
