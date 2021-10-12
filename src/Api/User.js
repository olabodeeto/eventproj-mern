import userEndPoints from "./endpoints/User.endpoints";

class UserClass {
  async Login(userdata) {
    const response = await fetch(userEndPoints.login, {
      method: "POST",
      credentials: "include",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(userdata),
    });
    const data = await response.json();
    return data;
  }

  async register(userdata) {
    try {
      const response = await fetch(userEndPoints.register, {
        method: "POST",
        credentials: "include",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(userdata),
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

  async checkLogin() {
    try {
      const result = await fetch(userEndPoints.checkLogin, {
        credentials: "include",
        method: "POST",
        headers: { "content-Type": "application/json" },
      });
      const res = await result.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      const result = await fetch(userEndPoints.logout, {
        credentials: "include",
        method: "POST",
        headers: { "content-Type": "application/json" },
      });
      const res = await result.json();
      return res.message;
    } catch (error) {
      console.log(error);
    }
  }
}

const User = new UserClass();
export default User;
