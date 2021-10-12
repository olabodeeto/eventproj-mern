import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Pages/public/Login";
import Index from "../Pages/public/Index";
import Register from "../Pages/public/Register";

export default function PublicNavigation() {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
}
