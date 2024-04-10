import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function TopBar() {
  const navigate = useNavigate("/");

  function userClick() {
    if (!localStorage.getItem("token")) {
      navigate("/register/user");
    } else {
      navigate("/purchasedcourses");
    }
  }
  function adminClick() {
    if (!localStorage.getItem("admin_token")) {
      navigate("/register/admin");
    } else {
      navigate("/editcourses");
    }
  }
  function purchasedCourses() {
    if (!localStorage.getItem("token")) {
      navigate("/register/user");
    } else {
      navigate("/purchasedcourses");
    }
  }

  return (
    <div className="fixed w-full">
      <div className="bg-custom-blue font-sans flex border border-custom-light">
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
            <button onClick={userClick}>Login</button>
          </div>
          <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs md:text-sm">
            <button onClick={purchasedCourses}>My Courses</button>
          </div>
          <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs bg-blue-700 md:text-sm">
            <button onClick={adminClick}>Admin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoursesCard(props) {
  
  function buyNow(selectedCourseId, email) {
    // Log email to the console to check if it's retrieved correctly
    console.log("User Email:", email);

    // Check if token is available
    const token = localStorage.getItem('token');
    if (!token) {
        alert("You can buy after Login.");
        navigate("/register/user")
         return;
    }

    fetch(`https://online-course-selling-server.vercel.app/user/buycourse/${selectedCourseId}`, {
        method: "POST",
        body: JSON.stringify({
            email
        }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then(async (res) => {
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Failed to purchase course");
        }
        const json = await res.json();
        alert("Course Purchased");
    })
    .catch(error => {
        alert(error.message || "Failed to purchase course");
    });
}

const { course } = props; // Destructure course from props

// Retrieve email from localStorage
const email = localStorage.getItem("email");
// Log email to the console to check if it's retrieved correctly
console.log("User Email:", email);

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
            <div className="text-blue-900 font-bold">{course.price}</div>
            <button
                onClick={()=>{
                    buyNow(course._id, email)
                }}
                className="mt-2 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
                Buy now
            </button>
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
export { CoursesCard };

export function AllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://online-course-selling-server.vercel.app/user/courses')
      .then((response) => response.json())
      .then((data) => setCourses(data.courses))
      .catch((error) => console.error("Error while fetching:", error));
  }, []);

  return (
    <div>
      <TopBar />

      {courses && courses.length > 0 ? (
        <div className="pt-24 flex flex-row items-center justify-center">
          {courses.map((course) => (
            <div key={course._id} className="w-fit ml-4">
              <CoursesCard course={{ ...course }} />
            </div>
          ))}
        </div>
      ) : (
        <h2 className="pt-24 flex flex-row items-center justify-center text-black">
          {courses
            ? "Loading..."
            : "Oops! No course is currently offered. Return later!"}
        </h2>
      )}
    </div>
  );
}
