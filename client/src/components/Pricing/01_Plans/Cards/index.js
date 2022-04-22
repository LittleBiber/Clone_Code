import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import '@fortawesome/fontawesome-free/js/all.js'

import { Plan } from './Plan'

const Main = styled.div`
  width: 100%;

  .wide {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;

    @media (max-width: 991px) {
      display: none;
    }
  }

  .narrow {
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media (min-width: 991px) {
      display: none;
    }
  }
`

export const Cards = ({ period, type }) => {
  const PLAN_DATA = [
    {
      name: 'BASIC I',
      color: '#987070',
      type: '개인',
      spic: true,
      expense: '9,900',
      expense_year: '7,920',
      result: { count: 10, attach: 3, group: null },
      status: period,
    },
    {
      name: 'BASIC II',
      color: '#987070',
      type: '개인',
      spic: false,
      expense: '19,900',
      expense_year: '15,920',
      result: { count: 50, attach: 10, group: null },
      status: period,
    },
    {
      name: 'PRO I',
      color: '#713838',
      type: '기업',
      spic: true,
      expense: '49,900',
      expense_year: '39,920',
      result: { count: 300, attach: null, group: 3 },
      status: period,
    },
    {
      name: 'PRO II',
      color: '#713838',
      type: '기업',
      spic: false,
      expense: '89,000',
      expense_year: '71,200',
      result: { count: 500, attach: null, group: 5 },
      status: period,
    },
    {
      name: 'PRO III',
      color: '#713838',
      type: '기업',
      spic: false,
      expense: '159,000',
      expense_year: '127,200',
      result: { count: null, attach: null, group: 10 },
      status: period,
    },
  ]
  return (
    <Main>
      <div className="wide">
        {PLAN_DATA.map((one, idx) => (
          <Plan {...one} key={idx} />
        ))}
      </div>
      <div className="narrow">
        {PLAN_DATA.filter((one) => one.type === type).map((one, idx) => (
          <Plan {...one} key={idx} />
        ))}
      </div>
    </Main>
  )
}

Cards.propTypes = {}
