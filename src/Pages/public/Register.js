import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import User from "../../Api/User";

export default function Register() {
  const [email, setemail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [username, setusername] = useState("");
  const [btnText, setbtnText] = useState("Create Account");
  const [formStatus, setformStatus] = useState(null);
  const [redir, setredir] = useState(false);

  const register = (e) => {
    e.preventDefault();
    setbtnText("Processing...");
    const userData = { email, firstName, lastName, password, phone, username };
    User.register(userData).then((data) => {
      //Posting data to event user register endooint
      if (data === 11000) {
        setformStatus("User already exist");
      } else {
        setformStatus("Account created successfully!");
        setTimeout(() => {
          setredir(true); //Set redirect to true
        }, 2000);
      }
      setbtnText("Create Account");
    });
  };

  //Checking if to redirect to login after signup
  if (redir) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="bg-gray-100 h-screen py-2 ">
      <div
        className="w-11/12 md:w-4/12 m-auto p-4
     flex flex-col items-center mt-28"
      >
        <div className="w-full">
          <div className="w-full p-4 bg-indigo-500">
            <h2 className="text-2xl text-gray-50 text-center mb-8">
              Create account
            </h2>
            {formStatus && (
              <p className="mb-8 text-center text-gray-50">{formStatus}</p>
            )}
            <div>
              <form className="flex flex-col gap-2" onSubmit={register}>
                <input
                  type="text"
                  placeholder="UserName"
                  value={username}
                  required
                  minLength={6}
                  className="input-field"
                  onChange={(e) => setusername(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  required
                  minLength={3}
                  className="input-field"
                  onChange={(e) => setfirstName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  minLength={3}
                  required
                  className="input-field"
                  onChange={(e) => setlastName(e.target.value)}
                />
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  required
                  minLength={11}
                  className="input-field"
                  onChange={(e) => setemail(e.target.value)}
                />

                <input
                  type="text"
                  value={phone}
                  placeholder="Phone"
                  required
                  minLength={10}
                  className="input-field"
                  onChange={(e) => setphone(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  required
                  minLength={5}
                  className="input-field"
                  onChange={(e) => setpassword(e.target.value)}
                />

                <button
                  className="login-btn-secondary text-black"
                  type="submit"
                  onSubmit={register}
                >
                  {btnText}
                </button>
              </form>
            </div>
          </div>
          <p className="text-center mt-10 text-gray-400">
            Already have an account?
            <Link to="/login">
              <span className="text-gray-700"> Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
