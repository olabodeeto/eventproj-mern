import eventEndPoints from "./endpoints/Event.endpoints";

class EventClass {
  async addEvent(eventdata) {
    try {
      const response = await fetch(eventEndPoints.addEvent, {
        method: "POST",
        credentials: "include",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(eventdata),
      });
      const data = await response.json();
      if (data.error) {
        return data.error;
      } else {
        return data.message;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async allEvent(username) {
    try {
      const response = await fetch(eventEndPoints.allEvent, {
        method: "POST",
        credentials: "include",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(username),
      });
      const data = await response.json();
      if (data.error) {
        return data.error;
      } else {
        return data.message;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteEvent(eventdata) {
    try {
      const response = await fetch(eventEndPoints.deleteEvent, {
        method: "POST",
        credentials: "include",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(eventdata),
      });
      const data = await response.json();
      if (data.error) {
        return data.error;
      } else {
        return data.message;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async editEvent(eventdata) {
    try {
      const response = await fetch(eventEndPoints.editEvent, {
        method: "POST",
        credentials: "include",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(eventdata),
      });
      const data = await response.json();
      if (data.error) {
        return data.error;
      } else {
        return data.message;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async singleEvent(eventdata) {
    try {
      const response = await fetch(eventEndPoints.singleEvent, {
        method: "POST",
        credentials: "include",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(eventdata),
      });
      const data = await response.json();
      if (data.error) {
        return data.error;
      } else {
        return data.message;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const Event = new EventClass();
export default Event;
