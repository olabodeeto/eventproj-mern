import React, { useState, useEffect } from "react";
import Header from "./partials/Header";
import { useHistory, useParams } from "react-router";
import EditEvent from "../../Logic/event/EditEvent";
import SingleEvent from "../../Logic/event/SingleEvent";

export default function AddEvent() {
  const [eventName, seteventName] = useState("");
  const [eventDescription, seteventDescription] = useState("");
  const [eventDate, seteventDate] = useState("");
  const [formStatus, setformStatus] = useState(null);
  const [btnText, setbtnText] = useState("Done");
  const history = useHistory();
  const { id } = useParams();

  const editevent = async (e) => {
    e.preventDefault();
    setbtnText("Processing...");
    try {
      const res = await EditEvent(eventName, eventDescription, eventDate, id);
      if (res === "success") {
        setformStatus("Event edited successfully");
        setTimeout(() => {
          history.push("/");
        }, 2000);
      } else {
        setformStatus("Operation failed!");
        setbtnText("Add Event");
        console.log(res);
      }
    } catch (error) {
      setformStatus("Operation failed!");
      setbtnText("Add Event");
    }
  };

  useEffect(() => {
    SingleEvent(id).then((data) => {
      //Fetching the single event using route param
      if (data._id) {
        seteventName(data.eventname);
        seteventDescription(data.eventdescription);
        seteventDate(data.eventdate);
      }
    });
  }, [id]);
  return (
    <>
      <Header />
      <div className="py-10 px-4 w-full bg-gray-100 h-screen overflow-y-scroll">
        <div className="mt-24 w-fill md:w-5/12 m-auto bg-indigo-300 ">
          <h1 className="text-center text-3xl font-semibold p-3 text-gray-900">
            Edit Event
          </h1>

          {formStatus && <p className="text-center mb-5 mt-10">{formStatus}</p>}
          <form
            className="bg-white mt p-4 flex flex-col gap-2 rounded-t-2xl"
            onSubmit={editevent}
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
              onSubmit={editevent}
            >
              {btnText}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
