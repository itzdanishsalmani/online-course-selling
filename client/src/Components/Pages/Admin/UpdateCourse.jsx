// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export function UpdateCourse(props) {
//   const { id } = props; // Destructure id from props

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageLink, setImageLink] = useState("");
//   const [price, setPrice] = useState("");
//   const navigate = useNavigate("/");

//   if (!localStorage.getItem("admin_token")) {
//     navigate("/register-admin");
//   }

// <<<<<<< production
//   return (
//     <div className="bg-custom-blue flex flex-col h-screen items-center justify-center">
//       <div className="bg-white p-8 text-black text-lg border border-blue-900 rounded-2xl ">
//         <div className="text-center font-medium text-custom-blue text-2xl">
//           Welcome to HyperDev{" "}
// =======
//     return (
//         <div className="bg-custom-blue flex flex-col h-screen items-center justify-center">
//             <div className="bg-white p-8 text-black text-lg border border-blue-900 rounded-2xl ">

//                 <div className="text-center font-medium text-custom-blue text-2xl">
//                     Welcome to HyperDev </div>

//                 <div className="p-2">Fill to add Course</div>

//                 <input className="p-2 rounded-xl text-black border border-black" type="String" placeholder="Title" onChange={(e) => {
//                     const value = e.target.value;
//                     setTitle(value);
//                 }} />  <br /> <br />

//                 <input className="p-2 rounded-xl text-black border border-black" type="String" placeholder="Description" onChange={(e) => {
//                     const value = e.target.value;
//                     setDescription(value);
//                 }} /> <br /> <br />

//                 <input className="p-2 rounded-xl text-black border border-black" type="link" placeholder="imageLink" onChange={(e) => {
//                     const value = e.target.value;
//                     setImageLink(value);
//                 }} /> <br /> <br />

//                 <input className="p-2 rounded-xl text-black border border-black" type="number" placeholder="Price" onChange={(e) => {
//                     const value = e.target.value;
//                     setPrice(value);
//                 }} /> <br /> <br />

//                 <div className="text-center p-2 border border-custom-light rounded-xl text-white text-lg bg-blue-700 md:text-base">
//                     <button onClick={() => {
//                         const id = props.course._id;
//                         fetch(`http://localhost:3000/admin/editcourse/update/${id}`, {
//                             method: "PUT",
//                             body: JSON.stringify({
//                                 title,
//                                 description,
//                                 imageLink,
//                                 price
//                             }),
//                             headers: {
//                                 "Content-Type": "application/json",
//                                 "Authorization": `Bearer ${localStorage.getItem('admin_token')}` // Attach the token here

//                             }
//                         })
//                             .then(async (res) => {
//                                 const json = await res.json();
//                                 alert("Course Updated")
//                                 navigate("/editcourses")

//                             })
//                     }}>Update Course</button> </div> <br />

//             </div>
// >>>>>>> master
//         </div>
//         <div className="p-2">Fill to add Course</div>
//         <input
//           className="p-2 rounded-xl text-black border border-black"
//           type="String"
//           placeholder="Title"
//           onChange={(e) => {
//             const value = e.target.value;
//             setTitle(value);
//           }}
//         />{" "}
//         <br /> <br />
//         <input
//           className="p-2 rounded-xl text-black border border-black"
//           type="String"
//           placeholder="Description"
//           onChange={(e) => {
//             const value = e.target.value;
//             setDescription(value);
//           }}
//         />{" "}
//         <br /> <br />
//         <input
//           className="p-2 rounded-xl text-black border border-black"
//           type="link"
//           placeholder="imageLink"
//           onChange={(e) => {
//             const value = e.target.value;
//             setImageLink(value);
//           }}
//         />{" "}
//         <br /> <br />
//         <input
//           className="p-2 rounded-xl text-black border border-black"
//           type="number"
//           placeholder="Price"
//           onChange={(e) => {
//             const value = e.target.value;
//             setPrice(value);
//           }}
//         />{" "}
//         <br /> <br />
//         <div className="text-center p-2 border border-custom-light rounded-xl text-white text-lg bg-blue-700 md:text-base">
//           <button
//             onClick={() => {
//               const id = props.course._id;
//               fetch(
//                 `{import.meta.env.VITE_SERVER_LOCATION}/admin/editcourse/update/${id}`,
//                 {
//                   method: "PUT",
//                   body: JSON.stringify({
//                     title,
//                     description,
//                     imageLink,
//                     price,
//                   }),
//                   headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${localStorage.getItem(
//                       "admin_token"
//                     )}`, // Attach the token here
//                   },
//                 }
//               ).then(async (res) => {
//                 const json = await res.json();
//                 alert("Course Updated");
//                 navigate("/editcourses");
//               });
//             }}
//           >
//             Update Course
//           </button>{" "}
//         </div>{" "}
//         <br />
//       </div>
//     </div>
//   );
// }
