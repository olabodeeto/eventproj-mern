import React, { useState, useContext } from "react";
import Header from "./partials/Header";
import { useHistory } from "react-router";
import AddEvents from "../../Logic/event/AddEvent";
import { GlobalContext } from "../../Store/GlobalProvider";

export default function AddEvent() {
  const [eventName, seteventName] = useState("");
  const [eventDescription, seteventDescription] = useState("");
  const [eventDate, seteventDate] = useState("");
  const [formStatus, setformStatus] = useState(null);
  const [btnText, setbtnText] = useState("Add Event");
  const history = useHistory();
  const { profile } = useContext(GlobalContext);
  const username = profile.username;
  const addevent = async (e) => {
    e.preventDefault();
    setbtnText("Processing...");
    try {
      const res = await AddEvents(
        eventName,
        eventDescription,
        eventDate,
        username
      );
      if (res === "success") {
        setformStatus("Event added successfully");
        setTimeout(() => {
          history.push("/");
        }, 2000);
      } else {
        setformStatus("Operation failed!");
        setbtnText("Add Event");
      }
    } catch (error) {
      setformStatus("Operation failed!");
      setbtnText("Add Event");
    }
  };
  return (
    <>
      <Header />
      <div className="py-10 px-4 w-full bg-gray-100 h-screen overflow-y-scroll">
        <div className="mt-24 w-fill md:w-5/12 m-auto bg-indigo-300 ">
          <h1 className="text-center text-3xl font-semibold p-3 text-gray-900">
            Add Event
          </h1>

          {formStatus && <p className="text-center mb-5 mt-10">{formStatus}</p>}
          <form
            className="bg-white mt p-4 flex flex-col gap-2 rounded-t-2xl"
            onSubmit={addevent}
          >
            <input
              type="text"
              placeholder="Event Name"
              value={eventName}
              maxLength={40}
              required
              className="py-3 px-2 w-full outline-none rounded-lg bg-gray-100"
              onChange={(e) => seteventName(e.target.value)}
            />
            <textarea
              className="resize-none w-full h-28 py-3 px-2
             rounded-lg outline-none bg-gray-100"
              placeholder="Event Description"
              value={eventDescription}
              maxLength={100}
              required
              onChange={(e) => seteventDescription(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder="DD/MM/YYY"
              value={eventDate}
              maxLength={10}
              minLength={10}
              required
              className="py-3 px-2 w-full outline-none rounded-lg bg-gray-100"
              onChange={(e) => seteventDate(e.target.value)}
            />
            <button
              className="login-btn-secondary"
              type="submit"
              onSubmit={addevent}
            >
              {btnText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
