import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllCourses } from './Components/Pages/AllCourses'
import { LandingPage } from './Components/Pages/LandingPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/allcourses" element={<AllCourses/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
