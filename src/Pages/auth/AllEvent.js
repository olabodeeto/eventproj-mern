import React, { useContext, useEffect, useState } from "react";
import Header from "./partials/Header";
import { GlobalContext } from "../../Store/GlobalProvider";
import uuid from "react-uuid";
import { Edit, Cross } from "akar-icons";
import AllEvents from "../../Logic/event/AllEvent";
import Modal from "../../helper/Modal";
import { Link } from "react-router-dom";

export default function AllEvent() {
  const { profile, eventstate, eventDispatch } = useContext(GlobalContext);
  //Get events and user profile from global state
  const [showModal, setshowModal] = useState(false);
  const [eventID, seteventID] = useState("");

  const deleteEvent = (id) => {
    seteventID(id);
    setshowModal(true);
  };

  const showPopup = (show) => {
    if (show === "block") {
      setshowModal(false);
    } else {
      setshowModal(true);
    }
  };

  const allEvents = eventstate.map((event) => (
    <div className="event-container" key={uuid()}>
      <div className="event-row">
        <div className="event-name">
          <p> {event.eventname}</p>
          <p className="flex gap-4 mt-10">
            <Link to={`/edit/${event._id}`}>
              <Edit size={18} className="cursor-pointer" />
            </Link>
            <Cross
              size={18}
              color="red"
              className="cursor-pointer"
              onClick={() => deleteEvent(event._id)}
            />
          </p>
        </div>
        <div className="w-4/12 p-4 text-xs md:text-sm  rounded-lg">
          {event.eventdescription}
        </div>
        <div className="w-4/12 p-4 text-xs md:text-sm rounded-lg">
          {event.eventdate}
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    AllEvents(profile.username).then((data) => {
      //fetch event and save it in global state
      eventDispatch({ type: "setevent", payload: data });
    });
  }, [profile, eventDispatch]);
  return (
    <>
      <Header />
      {showModal && <Modal event={eventID} show="block" popup={showPopup} />}
      <div className="py-10 px-2 w-full bg-gray-100 h-screen overflow-y-scroll">
        <div className="mt-16 w-fill md:w-10/12 m-auto">
          <h1 className="text-xl font-bold text-indigo-400 mb-10">
            Welcome {profile.firstname}
          </h1>

          <h1 className="text-center text-3xl font-semibold bg-indigo-300 p-3 rounded-lg text-gray-900">
            All Events
          </h1>
          <div className="w-full rounded-lg border border-indigo-500 mt-4">
            <div className="w-full flex justify-between gap-2">
              <div className="w-4/12 p-4 text-xs md:text-sm rounded-lg">
                Event Name
              </div>
              <div className="w-4/12 p-4 text-xs md:text-sm  rounded-lg">
                Description
              </div>
              <div className="w-4/12 p-4 text-xs md:text-sm rounded-lg">
                Event Date
              </div>
            </div>
          </div>
          {eventstate.length < 1 ? (
            <div className="h-full flex justify-center items-center mt-40">
              <h1 className="text-2xl text-gray-500">
                You dont any event, you can add one.
              </h1>
            </div>
          ) : (
            allEvents
          )}
        </div>
      </div>
    </>
  );
}
