import React from "react";
import { Switch, Route } from "react-router-dom";
import AllEvent from "../Pages/auth/AllEvent";
import AddEvent from "../Pages/auth/AddEvent";
import EditEvent from "../Pages/auth/EditEvent";

export default function AuthNavigation() {
  return (
    <Switch>
      <Route exact path="/" component={AllEvent} />
      <Route exact path="/add" component={AddEvent} />
      <Route exact path="/Edit/:id" component={EditEvent} />
    </Switch>
  );
}
