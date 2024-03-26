import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TopBar(){    
    const navigate= useNavigate();  

    useEffect(()=>{
        if(!localStorage.getItem('admin_token')){
            navigate('/register-admin')
        }
    },['admin_token'])
    
    return(
    <div className="fixed w-full">
        <div className="bg-custom-blue font-sans flex border border-custom-light">
            <div className="flex items-center p-3 inline-flex">
                <img src="/logo.png" className="w-10 h-10 rounded-3xl" alt="logo"></img>
                <div className="ml-1 text-white text-xl font-bold">HyperDev</div>
            </div>
            <div className="flex justify-end flex-grow inline-flex m-4">
                
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
    return(
        <div>
            <TopBar/>

        </div>
    )
}
