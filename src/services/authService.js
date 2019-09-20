import { axios } from "axios";

// import { signInSuccess } from "./../store/actions/singInActions";

export function signIn(creds) {
  return dispatch => {
    // handling API call
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        //console.log("axios action", response.data);
        let users = response.data;

        let oneUser = users.filter(obj => {
          return obj.username === creds.username;
        });

        if (oneUser[0] === undefined) {
          throw new Error("no such user");
        }
      })

      .then(oneUser => {
        // dispatch(signInSuccess(creds.username));
        dispatch({ type: "LOGIN_SUCCESS", oneUser });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
}
