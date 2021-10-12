export default function UserReducer(state, action) {
  switch (action.type) {
    case "login":
      return action.payload;

    case "logout":
      return action.payload;

    default:
      break;
  }
}
