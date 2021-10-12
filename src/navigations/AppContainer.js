import React, { useState, useContext, useEffect } from "react";
import AuthNavigation from "./AuthNavigation";
import PublicNavigation from "./PublicNavigation";
import { Redirect } from "react-router";
import { GlobalContext } from "../Store/GlobalProvider";
import User from "../Api/User";

export default function AppContainer() {
  const { user, userDispatch, profileDispatch } = useContext(GlobalContext);
  const [isLoggedIn, setisLoggedIn] = useState(user.login);

  useEffect(() => {
    User.checkLogin().then((data) => {
      //checking user login using http only cookie in the browser
      if (data.message._id) {
        const logindata = {
          login: true,
          userID: data.message._id,
        };
        setisLoggedIn(true);
        userDispatch({ type: "login", payload: logindata });
        profileDispatch({
          //Adding user profile to Global state
          type: "setProfile",
          payload: {
            firstname: data.message.firstname,
            lastname: data.message.lastname,
            username: data.message.username,
          },
        });
      } else {
        return <Redirect to="/login" />;
      }
    });
    setisLoggedIn(user.login);
  }, [ userDispatch, profileDispatch]);
  return <>{isLoggedIn ? <AuthNavigation /> : <PublicNavigation />}</>;
}
