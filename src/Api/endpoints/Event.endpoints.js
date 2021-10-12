const eventEndPoints = {
  addEvent: process.env.REACT_APP_BASE_URL + "event/add",
  editEvent: process.env.REACT_APP_BASE_URL + "event/edit",
  deleteEvent: process.env.REACT_APP_BASE_URL + "event/delete",
  singleEvent: process.env.REACT_APP_BASE_URL + "event/single",
  allEvent: process.env.REACT_APP_BASE_URL + "event/all",
};

export default eventEndPoints;
