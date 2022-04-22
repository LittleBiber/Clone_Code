import { Login } from '../../components/Login'
import styled from 'styled-components'

const Main = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #faf7ef;

  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
`

export default function SignIn() {
  return (
    <Main>
      <Login />
    </Main>
  )
}
