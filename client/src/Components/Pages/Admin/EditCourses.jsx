import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();

useEffect(() => {
    if (!localStorage.getItem("admin_token")) {
      navigate("/register/admin");
    }
  }, ["admin_token"]);

  function addCourse() {
    if (!localStorage.getItem("admin_token")) {
      navigate("/register/admin");
    } else {
      navigate("/editcourses/add");
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
function CoursesCard({ course, openEditPopup }) {
  const navigate = useNavigate();

  function deleteCourse() {
    fetch('https://online-course-selling-server.vercel.app/admin/editcourses/delete', {
      method: 'DELETE',
      body: JSON.stringify({
        id: course._id
      }),
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('admin_token')}`
      }
    })
      .then(async (res) => {
        const json = await res.json();
        alert("Course deleted");
        navigate("/editcourses");
      })
  }

  function updateCourse() {
    openEditPopup(course);
  }

  return (
    <div className="border border-blue-900 rounded-xl p-4 ">
      <img src={course.imageLink} className="w-60 h-36 rounded-xl" alt={course.title} />
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
  const [isEditing, setIsEditing] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetch('https://online-course-selling-server.vercel.app/user/courses')
      .then((response) => response.json())
      .then((data) => setCourses(data.courses))
      .catch((error) => console.error("Error while fetching:", error));
  }, [courses]);

  function openEditPopup(course) {
    setSelectedCourse(course);
    setIsEditing(true);
  }

  function closeEditPopup() {
    setIsEditing(false);
  }

  return (
    <div>
      <TopBar />

      {courses && courses.length > 0 ? (
        <div className="pt-24 flex flex-row items-center justify-center">
          {courses.map((course) => (
            <div key={course._id} className="w-fit ml-4">
              <CoursesCard course={course} openEditPopup={openEditPopup} />
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

      {isEditing && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <EditPopup closeEditPopup={closeEditPopup} selectedCourse={selectedCourse} />
        </div>
      )}
    </div>
  );
}

function EditPopup({ closeEditPopup, selectedCourse }) {
  const [title, setTitle] = useState(selectedCourse.title);
  const [description, setDescription] = useState(selectedCourse.description);
  const [imageLink, setImageLink] = useState(selectedCourse.imageLink);
  const [price, setPrice] = useState(selectedCourse.price);

  function updateCourse() {
    fetch(`https://online-course-selling-server.vercel.app/admin/editcourse/update/${selectedCourse._id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        description,
        imageLink,
        price
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('admin_token')}`
      }
    })
      .then(async (res) => {
        const json = await res.json();
        alert("Course Updated");
        closeEditPopup();
      })
  }

  return (
    <div className="bg-white p-8 text-black text-lg border border-blue-900 rounded-2xl">
      <div className="text-center font-medium text-custom-blue text-2xl">
        Welcome to HyperDev
      </div>
      <div className="p-2">Fill to update Course</div>
      <input className="p-2 rounded-xl text-black border border-black" type="String" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> <br /> <br />
      <input className="p-2 rounded-xl text-black border border-black" type="String" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /> <br /> <br />
      <input className="p-2 rounded-xl text-black border border-black" type="link" placeholder="imageLink" value={imageLink} onChange={(e) => setImageLink(e.target.value)} /> <br /> <br />
      <input className="p-2 rounded-xl text-black border border-black" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} /> <br /> <br />
      <div className="text-center p-2 border border-custom-light rounded-xl text-white text-lg bg-blue-700 md:text-base">
        <button onClick={updateCourse}>Update Course</button>
      </div> <br />
    </div>
  );
}
