import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllCourses } from './Components/Pages/AllCourses.jsx'
import { LandingPage } from './Components/Pages/LandingPage.jsx'
import Phonepe from "./Components/Pages/Phonepe.jsx";

import { UserLogin } from './Components/Pages/User/UserLogin.jsx'
import { PurchasedCourses } from "./Components/Pages/User/PurchasedCourses.jsx";

import { AdminLogin } from "./Components/Pages/Admin/AdminLogin.jsx"
import { EditCourses } from "./Components/Pages/Admin/EditCourses.jsx";
import { AddCourses } from "./Components/Pages/Admin/AddCourses.jsx";
import { UpdateCourse } from "./Components/Pages/Admin/UpdateCourse.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register-user" element={<UserLogin/>} />
        <Route path='/register-admin' element={<AdminLogin/>}/>
        <Route path="/allcourses" element={<AllCourses/>} />
        <Route path="/purchasedcourses" element={<PurchasedCourses/>} />
        <Route path="/editcourses" element={<EditCourses/>} />
        <Route path="/editcourses-add" element={<AddCourses/>} />
        <Route path="/editcourses-update" element={<UpdateCourse/>} />
        <Route path="/paymentpage" element={<Phonepe/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
