import Event from "../../Api/Event";

async function AllEvent(username) {
  const userData = { username: username };
  const res = await Event.allEvent(userData);
  return res;
}

export default AllEvent;
