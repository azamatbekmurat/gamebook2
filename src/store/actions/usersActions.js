// export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

// Action creator to dispatch received users to reducer
export const fetchUsersSuccess = users => ({
  type: "FETCH_USERS_SUCCESS",
  payload: { users }
});
