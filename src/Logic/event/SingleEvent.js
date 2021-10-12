import Event from "../../Api/Event";

async function SingleEvent(event) {
  const eventData = { event: event };
  const res = await Event.singleEvent(eventData);
  return res;
}

export default SingleEvent;
