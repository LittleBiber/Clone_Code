import { Banner } from '../components/Legality/01_Banner'
import { LawInfo } from '../components/Legality/02_LawInfo'
import { Guarantee } from '../components/Legality/03_Guarantee'
import { WorldWide } from '../components/Legality/04_WorldWide'
import { Promotion } from '../components/Common/Promotion'
import { Guide } from '../components/Common/Guide'
import { Footer } from '../components/Common/Footer'

import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;

  .footer {
    width: 100%;
    height: auto;
    background-color: rgb(26, 21, 21);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px 20px;
    position: relative;
  }
`

export default function Legality() {
  return (
    <Main>
      <Banner />
      <LawInfo />
      <Guarantee />
      <WorldWide />
      <Promotion />
      <Guide />
      <Footer />
    </Main>
  )
}
