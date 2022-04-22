import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Common/Header'
import Legality from './pages/Legality'
import Pricing from './pages/Pricing'
import Voucher from './pages/Voucher'
import Login from './pages/User/SignIn'
import SignUp from '../src/pages/User/SignUp'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="legality" element={<Legality />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="voucher" element={<Voucher />} />
        <Route path="signin" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
