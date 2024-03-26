import { Link,useNavigate } from "react-router-dom"
import { useState,useEffect } from "react";
import PropTypes from 'prop-types';

function TopBar(){
    const navigate = useNavigate('/');
        
        function userClick(){
          if(!localStorage.getItem('token')){
            navigate('/register-user')
          }else{
            navigate('/purchasedcourses')
          }
        }
        function adminClick(){
          if(!localStorage.getItem('admin_token')){
            navigate('/register-admin')
          }else{
          navigate('/editcourses')
      }
    }

     return (
    
         <div className="fixed w-full">
         <div className="bg-custom-blue font-sans flex border border-custom-light">
             <div className="flex items-center p-3 inline-flex">
                 <img src="/logo.png" className="w-10 h-10 rounded-3xl" alt="logo"></img>
                 <div className="ml-1 text-white text-xl font-bold">HyperDev</div>
             </div>
             <div className="flex justify-end flex-grow inline-flex m-4">
                 <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs md:text-sm">
                     <button onClick={userClick}>Login</button></div>
                 <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs md:text-sm">
                     <Link to="/purchasedcourses"><button>My Courses</button></Link></div>
                 <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs bg-blue-700 md:text-sm">
                     <button onClick={adminClick}>Admin</button></div>
             </div>
         </div>
         </div>
         
     )
 }

 function AfterTopBar(){
    return(
        <div className="pt-16 ">
            <div className="fixed h-full bg-custom-light pl-8 pr-16"><button>Main Menu</button>
                <div className="element mt-4">
                    <a href="/" className="font-medium hover:underline">Home</a><br />
                    <a href="/allcourses" className="font-medium hover:underline">Courses</a>
                </div>
            </div>

            <div className="mt-8 mb-8 text-center text-xs md:text-lg ">Courses</div>
        </div>
    )
 }

 function CoursesCard(props){
  const navigate = useNavigate('/');
  function payment(){
    navigate('/paymentpage')
  }

    const { course } = props; // Destructure course from props
    return (
        <div className="border border-blue-900 rounded-xl p-4">
            <img src="/AI.jpeg,DSA.png" className="w-fit h-auto rounded-xl" alt={course.title} />
            <div>
                <div className="font-bold text-lg">{course.title}</div>
                <div className="text-gray-600">{course.description}</div>
                <div className="text-blue-900 font-bold">{course.price}</div>
                <button onClick={payment} className="mt-2 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700">Buy now</button>
            </div>
        </div>
    );
}

CoursesCard.propTypes = {
    course: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export function AllCourses() {
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
        <AfterTopBar/>
  
        {courses.length > 0 ? (
          <div className="flex flex-wrap">
            <div className="w-fit ml-48">
              <CoursesCard course={courses[0]} />
            </div>
            {courses.slice(1).map((course) => (
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