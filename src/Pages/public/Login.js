import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Store/GlobalProvider";
import { Link, Redirect } from "react-router-dom";
import User from "../../Api/User";

export default function Login() {
  const { userDispatch } = useContext(GlobalContext);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [btnText, setbtnText] = useState("Login");
  const [redirect, setredirect] = useState(false);
  const [formStatus, setformStatus] = useState(null);

  const login = (e) => {
    e.preventDefault();
    setbtnText("Processing ...");
    const userData = { username, password };
    User.Login(userData).then((data) => {
      if (data.error) {
        setformStatus(data.error);
        setbtnText("Login");
      } else {
        setformStatus("Login successful");
        setbtnText("Login");
        setredirect(true);
        userDispatch({ type: "login", payload: data.message }); //Dispatch login status
        // action to global state
      }
    });
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="bg-gray-100 h-screen py-2 ">
      <div
        className="w-11/12 md:w-4/12 m-auto p-4
     flex flex-col items-center mt-48"
      >
        <div className="w-full">
          <div className="w-full p-4 bg-indigo-500">
            <h2 className="text-2xl text-gray-50 text-center mb-16">
              Welcome, please login
            </h2>

            {formStatus && (
              <p className="mb-8 text-center text-gray-50">{formStatus}</p>
            )}
            <div>
              <form className="flex flex-col gap-2" onSubmit={login}>
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  required
                  min={8}
                  className="input-field"
                  onChange={(e) => setusername(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  required
                  className="input-field"
                  min={5}
                  onChange={(e) => setpassword(e.target.value)}
                />

                <button
                  className="login-btn-secondary text-black"
                  type="submit"
                  onSubmit={login}
                >
                  {btnText}
                </button>
              </form>
            </div>
          </div>
          <p className="text-center mt-10 text-gray-400">
            Dont have an account?
            <Link to="/register">
              <span className="text-gray-700"> Create account</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
