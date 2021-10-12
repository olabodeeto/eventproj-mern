export default function eventReducer(state, action) {
  switch (action.type) {
    case "setevent":
      return action.payload;

    default:
      break;
  }
}
