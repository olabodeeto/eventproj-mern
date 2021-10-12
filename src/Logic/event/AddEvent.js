import Event from "../../Api/Event";

async function AddEvent(eventname, eventdesc, eventdate, username) {
  const eventData = { eventname, eventdesc, eventdate, username };
  const res = await Event.addEvent(eventData);
  return res;
}
export default AddEvent;
