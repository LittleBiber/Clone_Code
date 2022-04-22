import { Discount } from '../components/Voucher/01_Discount'
import { Benefits } from '../components/Voucher/02_Benefits'
import { Price } from '../components/Voucher/03_Price'
import { Pros } from '../components/Voucher/04_Pros'
import { Partners } from '../components/Voucher/05_Partners'
import { Promotion } from '../components/Common/Promotion'
import { Guide } from '../components/Common/Guide'
import { Footer } from '../components/Common/Footer'

import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;

  .pros {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 70px 0;
  }

  .partners {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .promotion {
    display: flex;
    justify-content: center;

    width: 100%;
    z-index: 0;
    background-color: white;
  }

  .guide {
    display: flex;
    justify-content: center;

    width: 100%;
    z-index: 0;
    background-color: white;
  }

  .footer {
    width: 100%;
    height: auto;
    background-color: rgb(26, 21, 21);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-around;
    padding: 0px 20px;
    position: relative;
  }
`

export default function Voucher() {
  return (
    <Main>
      <Discount />
      <Benefits />
      <Price />
      <Pros />
      <Partners />
      <Promotion />
      <Guide />
      <Footer />
    </Main>
  )
}
