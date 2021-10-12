export default function profileReducer(state, action) {
  switch (action.type) {
    case "setProfile":
      return action.payload;

    default:
      break;
  }
}
