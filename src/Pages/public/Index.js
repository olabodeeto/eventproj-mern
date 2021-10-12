import React from "react";

import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="bg-gray-100 h-screen py-2 ">
      <div
        className="w-11/12 md:w-5/12 m-auto p-4
       flex flex-col items-center mt-60"
      >
        <h2 className="text-5xl text-indigo-700">Event Project</h2>
        <div className="flex gap-4 mt-20">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
