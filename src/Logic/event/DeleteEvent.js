import Event from "../../Api/Event";

async function DeleteEvent(event) {
  const eventData = { event: event };
  const res = await Event.deleteEvent(eventData);
  return res;
}

export default DeleteEvent;
