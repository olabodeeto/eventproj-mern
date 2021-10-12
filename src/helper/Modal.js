import React, { useContext, useState } from "react";
import DeleteEvent from "../Logic/event/DeleteEvent";
import { GlobalContext } from "../Store/GlobalProvider";
import AllEvents from "../Logic/event/AllEvent";

export default function Modal({ event, show, popup }) {
  const { profile, eventDispatch } = useContext(GlobalContext);
  const [btnText, setbtnText] = useState("Yes");
  console.log(event);

  const deleteEvent = async () => {
    const res = await DeleteEvent(event);
    setbtnText("Wait..");
    if (res === "deleted") {
      AllEvents(profile.username).then((data) => {
        eventDispatch({ type: "setevent", payload: data });
        popup(show);
      });
    } else {
      setbtnText("Failed!");
    }
  };

  return (
    <div className={show}>
      <div
        className="w-full h-screen fixed flex justify-center 
    bg-black bg-opacity-40"
      >
        <div className="mt-48 w-10/12 h-44 md:w-4/12 p-4 bg-white">
          <p className="text-gray-500">
            Are you sure you want to delete this event?
          </p>
          <div className="flex gap-4 m-auto w-18/12 mt-12 justify-center mb-5">
            <button
              className="bg-indigo-600 text-gray-50
           py-2 px-12 rounded-lg"
              onClick={deleteEvent}
            >
              {btnText}
            </button>
            <button
              className="bg-red-400 text-gray-50
           py-2 px-10 rounded-lg"
              onClick={() => popup(show)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
