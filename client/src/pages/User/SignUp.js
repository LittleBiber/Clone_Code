import { SelectType } from '../../components/SignUp/01_SelectType'
import { SelectOauth } from '../../components/SignUp/02_SelectOauth'
import { UserData } from '../../components/SignUp/03_UserData'
import { SendVerify } from '../../components/SignUp/04_SendVerify'
import { Part1 } from '../../components/SignUp/05_CompanyData/Part1'
import { Part2 } from '../../components/SignUp/05_CompanyData/Part2'
import { Bottom } from '../../components/SignUp/Bottom'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Main = styled.div`
  width: 100%;
  padding-top: 120px;

  background-color: #f9f6ee;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export default function SignUp() {
  const [value, setValue] = useState('signup')
  const [component, setComponent] = useState(null)
  const [data, setData] = useState(null)

  const obj = {
    signup: <SelectType setValue={setValue} />,
    personal: <SelectOauth setValue={setValue} />,
    email: <UserData setValue={setValue} setData={setData} />,
    verfiy: <SendVerify userData={data} />,
    enterprise_01: <Part1 setValue={setValue} setData={setData} />,
    enterprise_02: (
      <Part2 companyData={data} setValue={setValue} setData={setData} />
    ),
  }

  const changeComponent = (str) => {
    setComponent(obj[str])
  }

  useEffect(() => {
    changeComponent(value)
    console.log(data)
  }, [value])

  return (
    <Main>
      <div>{component}</div>
      <Bottom />
    </Main>
  )
}
