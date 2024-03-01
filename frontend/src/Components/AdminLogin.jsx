import { useState } from "react"

export function AdminLogin(){
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

    return(
        <>
        Admin <br />
        <input type="email" placeholder="email" onChange={(e)=>{
            const value = e.target.value;
            setEmail(value);
        }
        }/><br />
        <input type="password" placeholder="password" onChange={(e)=>{
            const value = e.target.value;
            setPassword(value);
        }}/><br />
        <button onClick={()=>{
            fetch('http://localhost:3000/admin/signup',{
                method:"POST",
                body:JSON.stringify({
                    email,
                    password
                }),
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(async (res)=>{
                const json = await res.json();
                alert("admin created")
            })
        }}>Sign Up</button>
        <button>Login</button>
        </>
    )
}