import React, { createContext, useReducer } from "react";
import UserReducer from "./reducers/UserReducer";
import userInitialState from "./initialstates/UserInitialState";
import profileReducer from "./reducers/profileReducer";
import ProfileInitialState from "./initialstates/ProfileInitialState";
import eventReducer from "./reducers/EventReducer";
import EventInitialState from "./initialstates/EventInitialState";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [user, userDispatch] = useReducer(UserReducer, userInitialState);
  const [profile, profileDispatch] = useReducer(
    profileReducer,
    ProfileInitialState
  );

  const [eventstate, eventDispatch] = useReducer(
    eventReducer,
    EventInitialState
  );
  return (
    <GlobalContext.Provider
      value={{
        user,
        userDispatch,
        profile,
        profileDispatch,
        eventstate,
        eventDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
