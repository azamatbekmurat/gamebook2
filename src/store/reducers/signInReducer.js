const initState = {
  authError: false,
  username: ""
};

const signInReducer = (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "LOGIN_SUCCESS_ASYNC":
      //console.log("signIn at reducer", action);
      state = {
        ...state,
        authError: true,
        username: action.payload.payload
      };
      break;
    case "LOGIN_ERROR":
      console.log("LOGIN_ERROR at reducer", action);
      state = {
        ...state,
        username: action.err.message
      };
      break;
  }
  return state;
};

export default signInReducer;
