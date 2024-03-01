import { useState } from "react";

export function UserLogin() { 
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  return (
    <div> 
    User <br /> 
      <input type="email" placeholder="email" onChange={(e)=>{
        const value = e.target.value;
        setEmail(value);
      }}/><br />
      <input type="password" placeholder="password" onChange={(e)=>{
        const value = e.target.value;
        setPassword(value);
      }}/><br />
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
      }}>Sign Up</button> <br />

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
  );
}
