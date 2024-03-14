import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllCourses } from './Components/Pages/AllCourses.jsx'
import { LandingPage } from './Components/Pages/LandingPage.jsx'
import { UserLogin } from './Components/UserLogin.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<UserLogin/>} />
        <Route path="/allcourses" element={<AllCourses/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
