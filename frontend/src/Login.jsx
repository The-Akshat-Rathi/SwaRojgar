import React from "react";
import loginImage from "./assets/loginpage.png";
import { FaGooglePlusG } from "react-icons/fa";

function Login() {
  return (
    <div className=" m-[10vw] w-[80vw] flex justify-center items-center border-2 p-[1vw] rounded-3xl bg-gray-200">
      {/* Image section  */}
      <div className="bg-gray-200">
        <img src={loginImage} alt="Login Page" className="w-full rounded-xl" />
      </div>
      {/* Main section  */}
      <div className="w-full pl-[2vw]">
        <h4 className="text-5xl font-medium mb-2">Hello Again!</h4>
        <h5>Welcome back you've been missed!</h5>
        <input
          type="text"
          placeholder="Email"
          className="w-2/3 mt-[5vw] p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-2/3 mt-[2vw] p-3 rounded-lg mb-10"
        />
        <div className="flex gap-10 ">
          <button className="bg-white p-5 rounded-md transition-shadow hover:shadow-xl">
            <FaGooglePlusG className="text-3xl" />
          </button>
          <button className="bg-white p-5 rounded-md transition-shadow hover:shadow-xl">
            <FaGooglePlusG className="text-3xl" />
          </button>
          <button className="bg-white p-5 rounded-md transition-shadow hover:shadow-xl">
            <FaGooglePlusG className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
