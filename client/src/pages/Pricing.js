import React from 'react'
import styled from 'styled-components'
import { Plans } from '../components/Pricing/01_Plans'
import { Tables } from '../components/Pricing/02_Features'
import { Questions } from '../components/Pricing/03_Questions'
import { Promotion } from '../components/Common/Promotion'
import { Guide } from '../components/Common/Guide'
import { Footer } from '../components/Common/Footer'

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  background-color: white;
`

export default function Pricing() {
  return (
    <Main>
      <Plans />
      <Tables />
      <Questions />
      <Promotion />
      <Guide />
      <Footer />
    </Main>
  )
}
