import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button } from './Button'
import { Cards } from './Cards'
import { Selector } from './Selector'
import { NarrowSelector } from './NarrowSelector'

const Wrapper = styled.div`
  background: #faf7ef;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  align-items: center;
  justify-content: center;
`

const Main = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 40px;
    font-weight: bold;
    margin: 10px;

    @media (max-width: 991px) {
      font-size: 28px;
    }
  }

  .desc {
    font-size: 20px;

    @media (max-width: 991px) {
      font-size: 16px;
      padding-bottom: 40px;
    }
  }

  Button {
    margin: 30px 0;
  }

  .caution {
    width: 100%;
    text-align: right;
    color: grey;
    font-size: 14px;

    @media (max-width: 991px) {
      display: none;
    }
  }
`

export const Plans = () => {
  const [period, setPeriod] = useState(0)

  const [type, setType] = useState('개인')

  const onClick = (event) => {
    console.log(typeof event.target.value)

    const value = event.target.value

    if (value !== 'on') setPeriod(Number(value))
    else setPeriod(!period)
  }

  return (
    <Wrapper>
      <Main>
        <div className="title">요금 안내</div>
        <div className="desc">개인/기업에 적합한 요금제를 선택하세요.</div>

        <Button />

        <NarrowSelector setType={setType} type={type} />

        <Selector onClick={onClick} period={period} />

        <Cards period={period} type={type} />

        <div className="caution">*부가세 미포함</div>
      </Main>
    </Wrapper>
  )
}

Plans.propTypes = {}
