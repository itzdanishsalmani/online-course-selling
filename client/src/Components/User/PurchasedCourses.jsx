import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


function TopBar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/register/user");
    }
  }, ["token"]);

  return (
    <div className="fixed w-full">
      <div className="bg-custom-blue-nav font-sans flex">
        <div className="flex items-center p-3 inline-flex">
          <img
            src="/logo.png"
            className="w-10 h-10 rounded-3xl"
            alt="logo"
          ></img>
          <div className="ml-1 text-white text-xl font-bold">HyperDev</div>
        </div>
        <div className="flex justify-end flex-grow inline-flex m-4">
          <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs md:text-sm">
          <button
              onClick={() => {
                navigate("/allcourses");
              }}
            >
              All courses
            </button>
          </div>
          <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs bg-blue-700 md:text-sm">
          <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("email");
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DisplayText(){
  return (
    <div className="pt-24 text-xl font-bold flex justify-center items-center ">
      Your Purchased Course
    </div>
  )
}

function CoursesCard(props) {
    
const { course } = props; // Destructure course from props

return (
    <div className="border border-blue-900 rounded-xl p-4 ">
        <img
            src={course.imageLink}
            className="w-60 h-36 rounded-xl"
            alt={course._id}
        />
        <div>
            <div className="font-bold text-lg">{course.title}</div>
            <div className="text-gray-600">{course.description}</div>
        
        </div>
    </div>
);
}

CoursesCard.propTypes = {
  course: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export function PurchasedCourses() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
      const email = localStorage.getItem("email");
      if (!email) {
          navigate("/allcourses");
          return;
      }

      fetch(`https://hyperdev-server.vercel.app/user/purchasedcourse/${email}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
      })
      .then(async (res) => {
          if (!res.ok) {
              const error = await res.json();
              throw new Error(error.message || "Failed to fetch purchased courses");
          }
          const data = await res.json();
          setCourses(data.purchasedCourses);
      })
      .catch(error => {
          console.error("Error fetching purchased courses:", error);
          // Handle error, e.g., show error message
      });
  }, [navigate]);

  return (
      <div>
        <TopBar/>
        <DisplayText/>
        {courses && courses.length > 0 ? (
        <div className=" pt-8 flex flex-col md:flex-row items-center justify-center">
          {courses.map((course) => (
            <div key={course._id} className="w-fit mt-4 md:ml-4">
              <CoursesCard course={{ ...course }} />
            </div>
          ))}
        </div>
      ) : (
        <h2 className="pt-8 flex flex-row items-center justify-center text-black">
          {courses
            ? "Loading..."
            : "Oops! No course is currently offered. Return later!"}
        </h2>
      )}
      </div>
  );
}