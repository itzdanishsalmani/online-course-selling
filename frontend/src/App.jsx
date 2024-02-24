import { useState } from 'react'
import { UserLogin } from './Components/UserLogin'
import { AdminLogin } from './Components/AdminLogin'

function App() {


  return (
    <>
    {/* <button onClick={handler()} >User Login</button> */}
    <UserLogin/>
    <AdminLogin/>
    {/* <button>Admin Login</button> */}
    </>
  )
}

export default App
