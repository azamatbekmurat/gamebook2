const initState = {
  authError: false,
  username: ""
};

const userReducer = (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("action at reducer", action);
      state = {
        ...state,
        authError: true,
        username: action.payload.username
      };
      break;
  }
  return state;
};

export default userReducer;
