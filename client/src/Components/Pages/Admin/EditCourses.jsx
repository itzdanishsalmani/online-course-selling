import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin_token")) {
      navigate("/register-admin");
    }
  }, ["admin_token"]);

  function addCourse() {
    if (!localStorage.getItem("admin_token")) {
      navigate("/register-admin");
    } else {
      navigate("/editcourses-add");
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
            <button onClick={addCourse}>Add Courses</button>
          </div>
          <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs bg-blue-700 md:text-sm">
            <button
              onClick={() => {
                localStorage.removeItem("admin_token");
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
function CoursesCard(props) {
  const navigate = useNavigate("/");

  function deleteCourse() {
    fetch(`{import.meta.env.VITE_SERVER_LOCATION}/admin/editcourses/delete`, {
      method: "DELETE",
      body: JSON.stringify({
        id: props.course._id,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
      },
    }).then(async (res) => {
      const json = await res.json();
      alert("Course deleted");
      navigate("/editcourses");
    });
  }
  function updateCourse() {
    navigate("/editcourses-update");
  }

  const { course } = props; // Destructure course from props
  return (
    <div className="border border-blue-900 rounded-xl p-4 ">
      <img
        src={course.imageLink}
        className="w-60 h-36 rounded-xl"
        alt={course.title}
      />
      <div>
        <div className="font-bold text-lg">{course.title}</div>
        <div className="text-gray-600">{course.description}</div>
        <div className="text-blue-900 font-bold">{course.price}</div>
        <button
          onClick={updateCourse}
          className="mt-2 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={deleteCourse}
          className="mt-2 ml-8 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export function EditCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_LOCATION}/user/courses`)
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
            ? "Oops! No course is currently offered. Return later!"
            : "Loading..."}
        </h2>
      )}
    </div>
  );
}
