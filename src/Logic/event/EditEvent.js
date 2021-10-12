import Event from "../../Api/Event";

async function EditEvent(eventname, eventdesc, eventdate, id) {
  const eventData = { eventname, eventdesc, eventdate, id };
  const res = await Event.editEvent(eventData);
  return res;
}

export default EditEvent;
