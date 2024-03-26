import { useEffect,useState } from "react";
import { useLinkClickHandler, useNavigate } from "react-router-dom";
import { CoursesCard } from "./AllCourses";

function TopBar(){    
    const navigate= useNavigate();  

    useEffect(()=>{
        if(!localStorage.getItem('admin_token')){
            navigate('/register-admin')
        }
    },['admin_token'])

    function addCourse(){
        if(!localStorage.getItem('admin_token')){
            navigate("/register-admin")
        }else{
            navigate( '/editcourses-add' ) 
        }
    }
    
    return(
    <div className="fixed w-full">
        <div className="bg-custom-blue font-sans flex border border-custom-light">
            <div className="flex items-center p-3 inline-flex">
                <img src="/logo.png" className="w-10 h-10 rounded-3xl" alt="logo"></img>
                <div className="ml-1 text-white text-xl font-bold">HyperDev</div>
            </div>
            <div className="flex justify-end flex-grow inline-flex m-4">
            <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs md:text-sm">
                     <button onClick={addCourse}>Add Courses</button></div>                
                <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs bg-blue-700 md:text-sm">
                    <button onClick={()=>{
        localStorage.removeItem('admin_token')
        navigate("/")
    }}>Logout</button></div>
            </div>
        </div>
        </div>
    )
}

export function EditCourses(){
    const [courses, setCourses] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/user/courses')
        .then(response=>response.json())
        .then(data=>setCourses(data.courses))
        .catch(error => console.error("Error while fetching:", error));
    }, []);
  
    return (
      <div>
        <TopBar/>
  
        {courses.length > 0 ? (
          <div className="pt-24 flex flex-row items-center justify-center">
            
            {courses.map((course) => (
              <div key={course._id} className="w-fit ml-4">
                <CoursesCard course={{
                  ...course,
                }}
              />
              </div>
            ))}
          </div>
        ) : (
          <h2 className="text-white">
            "Oops! No course is currently offered. Return later!"
          </h2>
        )}
  
      </div>
    );
  }
