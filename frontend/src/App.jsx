import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllCourses } from './Components/Pages/AllCourses.jsx'
import { LandingPage } from './Components/Pages/LandingPage.jsx'
import { UserLogin } from './Components/UserLogin.jsx'
import { AdminLogin } from "./Components/AdminLogin.jsx"
import { PurchasedCourses } from "./Components/PurchasedCourses.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register-user" element={<UserLogin/>} />
        <Route path='/register-admin' element={<AdminLogin/>}/>
        <Route path="/allcourses" element={<AllCourses/>} />
        <Route path="/purchasedcourses" element={<PurchasedCourses/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
