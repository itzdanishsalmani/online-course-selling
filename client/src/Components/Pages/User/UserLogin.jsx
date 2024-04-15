import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Fields cannot be empty");
      return;
    }

    fetch("https://online-course-selling-server.vercel.app/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          const token = data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("email", email);
          console.log("User Token and email is", token, email);
          alert("You have logged in");
          navigate("/purchasedcourses");
        } else {
          alert("Incorrect username or password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSignup = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Fields cannot be empty");
      return;
    }

    fetch("https://online-course-selling-server.vercel.app/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const json = await res.json();
        alert("User added");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-custom-blue flex flex-col h-screen items-center justify-center">
      <div className="bg-white p-8 text-black text-lg border border-blue-900 rounded-2xl ">
        <div className="text-center font-medium text-custom-blue text-2xl">
          Welcome to HyperDev{" "}
        </div>
        <div className="m-2">User</div>
        <input
          className="p-2 rounded-xl text-black border border-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br /> <br />
        <input
          className="p-2 rounded-xl text-black border border-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br /> <br />
        <div className="text-center p-2 border border-custom-light rounded-xl text-white text-lg bg-blue-700 md:text-base cursor-pointer">
          <div onClick={handleLogin}>Login</div>
        </div>
        <br />
        <div className="text-center">Don't have an account? Signup</div>
        <br />
        <div className="text-center p-2 border border-custom-light rounded-xl text-white text-lg bg-blue-700 md:text-base cursor-pointer">
          <div onClick={handleSignup}>Sign Up</div>{" "}
        </div>{" "}
        <br />
      </div>
    </div>
  );
}
