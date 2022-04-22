import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CardList } from './CardList'

const Main = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 120px 0;
  align-items: center;
  .list_title {
    width: 460px;
    word-break: keep-all;
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    line-height: 50px;
    margin-bottom: 40px;
  }

  @media (max-width: 991px) {
    .list_title {
      font-size: 26px;
      width: 280px;
      line-height: 35px;
    }
  }
`
export const LawInfo = () => {
  return (
    <Main>
      <div className="list_title">
        대한민국에서는 전자계약을 아래와 같이 규정하고 있습니다.
      </div>
      <CardList />
    </Main>
  )
}

LawInfo.propTypes = {}
