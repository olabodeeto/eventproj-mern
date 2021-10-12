import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Health, Command, SignOut } from "akar-icons";
import "./Header.css";
import { GlobalContext } from "../../../Store/GlobalProvider";
import User from "../../../Api/User";

export default function Header() {
  const { userDispatch } = useContext(GlobalContext);
  const history = useHistory();

  const logout = async () => {
    const res = await User.logout();
    if (res === "logout") {
      history.push("/login");
      userDispatch({ type: "logout", payload: { login: false, userID: "" } });
    }
  };
  return (
    <>
      <div className="header md:hidden">
        <div className="logo">EventX</div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="menu-icon">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <div className="mt-20">
            <Link to="/">
              <li>
                <Command size={24} />
                All Events
              </li>
            </Link>
            <Link to="/add">
              <li>
                <Health size={24} className="" />
                Add Event
              </li>
            </Link>

            <li onClick={logout}>
              <SignOut size={24} className="" />
              Logout
            </li>
          </div>
        </ul>
      </div>

      <div className="bg-indigo-700 p-4 w-full hidden md:block fixed z-50 top-0">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="text-4xl text-gray-50">EventX</h2>
          </div>
          <ul className="flex text-gray-50 gap-10 mt-2">
            <Link to="/">
              <li className="flex gap-2 cursor-pointer">
                <Command size={24} />
                All Events
              </li>
            </Link>
            <Link to="/add">
              <li className="flex gap-2 cursor-pointer">
                <Health size={24} className="" />
                Add Event
              </li>
            </Link>
            <li className="flex gap-2 cursor-pointer" onClick={logout}>
              <SignOut size={24} className="" />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
