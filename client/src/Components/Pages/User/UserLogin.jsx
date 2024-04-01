import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("/");
  return (
    <div className="bg-custom-blue flex flex-col h-screen items-center justify-center">
      <div className="bg-white p-8 text-black text-lg border border-blue-900 rounded-2xl ">
        <div className="text-center font-medium text-custom-blue text-2xl">
          Welcome to HyperDev{" "}
        </div>
        <div className="p-2">User</div>
        <input
          className="p-2 rounded-xl text-black border border-black"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            const value = e.target.value;
            setEmail(value);
          }}
        />{" "}
        <br /> <br />
        <input
          className="p-2 rounded-xl text-black border border-black"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            const value = e.target.value;
            setPassword(value);
          }}
        />{" "}
        <br /> <br />
        <div className="text-center p-2 border border-custom-light rounded-xl text-white text-lg bg-blue-700 md:text-base">
          <button
            onClick={() => {
              fetch(`${import.meta.env.VITE_SERVER_LOCATION}/user/signin`, {
                method: "POST",
                body: JSON.stringify({
                  email: email,
                  password: password,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((response) => response.json())
                .then((data) => {
                  if (data.success) {
                    const token = data.token;
                    localStorage.setItem("token", token);
                    console.log("User Token:", token);
                    navigate("/purchasedcourses");
                  } else {
                    alert("Incorrect username or password"); // Show failure message
                  }
                });
            }}
          >
            {" "}
            Login
          </button>{" "}
        </div>{" "}
        <br />
        <div className="pl-2">Don't have an account? Signup</div>
        <br />
        <div className="text-center p-2 border border-custom-light rounded-xl text-white text-lg bg-blue-700 md:text-base">
          <button
            onClick={() => {
              fetch(`${import.meta.env.VITE_SERVER_LOCATION}/user/signup`, {
                method: "POST",
                body: JSON.stringify({
                  email: email,
                  password: password,
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then(async (res) => {
                const json = await res.json();
                alert("user added");
              });
            }}
          >
            Sign Up
          </button>{" "}
        </div>{" "}
        <br />
      </div>
    </div>
  );
}
