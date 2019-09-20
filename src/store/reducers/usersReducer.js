//import { FETCH_USERS_SUCCESS } from "../actions/usersActions";

// const initState = {
//   users: []
// };

const usersReducer = (state = {}, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      console.log("users reducer", action);
      return {
        ...state,
        users: action.payload.users
      };
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
  //return state;
};

export default usersReducer;
