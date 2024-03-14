import { useState } from "react";

export function UserLogin() { 
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  return (
    <div className="bg-custom-blue flex flex-col h-screen items-center justify-center"> 
    <div className="p-4 text-white text-lg border border-blue-900 rounded-3xl "> 
    <div className="text-2xl">
    Welcome to HyperDev </div>  <br /> 
      <input type="email" placeholder="Email" onChange={(e)=>{
        const value = e.target.value;
        setEmail(value);
      }}/><br /><br/>
      <input type="password" placeholder="Password" onChange={(e)=>{
        const value = e.target.value;
        setPassword(value);
      }}/><br /> <br />
      <button onClick={()=>{
        fetch('http://localhost:3000/user/signup',{
          method:"POST",
          body:JSON.stringify({
            email:email,
            password:password
          }),
          headers:{
            "content-type":"application/json"
          }
        })
        .then(async (res)=>{
          const json = await res.json();
          alert("user added")
      })
      }}>Sign Up</button> <br /> <br />
      <button onClick={()=>{
        fetch('http://localhost:3000/user/signin',{
          method:"POST",
          body:JSON.stringify({
            email:email,
            password:password
          }),
          headers:{
            "content-type":"application/json"
          }
        })
        .then(response => response.json())
.then(data => {
    if (data.success) {
        alert("Verified"); // Show success message
    } else {
        alert("Incorrect username or password"); // Show failure message
    }
})}}> Login</button>
      <br />
    </div>
    </div>
  );
}
