import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllCourses } from "./Components/AllCourses.jsx"
import { LandingPage } from "./Components/LandingPage.jsx"

import { UserLogin } from "./Components/User/UserLogin.jsx"
import { PurchasedCourses } from "./Components/User/PurchasedCourses.jsx";

import { AdminLogin } from "./Components/Admin/AdminLogin.jsx"
import { EditCourses } from "./Components/Admin/EditCourses.jsx";
import { AddCourses } from "./Components/Admin/AddCourses.jsx";
import { RedirectUnsuccessful } from "./Components/User/RedirectUnsuccessful.jsx";
import { RedirectSuccessful } from "./Components/User/RedirectSuccessful.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register/user" element={<UserLogin/>} />
        <Route path='/register/admin' element={<AdminLogin/>}/>
        <Route path="/allcourses" element={<AllCourses/>} />
        <Route path="/purchasedcourses" element={<PurchasedCourses/>} />
        <Route path="/editcourses" element={<EditCourses/>} />
        <Route path="/editcourses/add" element={<AddCourses/>} />
        <Route path='/success' element={<RedirectSuccessful/>} />
        <Route path='/failed' element={<RedirectUnsuccessful/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
