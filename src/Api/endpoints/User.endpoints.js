const userEndPoints = {
  register: process.env.REACT_APP_BASE_URL + "user/register",
  login: process.env.REACT_APP_BASE_URL + "user/login",
  logout: process.env.REACT_APP_BASE_URL + "user/logout",
  checkLogin: process.env.REACT_APP_BASE_URL + "user/checklogin",
};

export default userEndPoints;
