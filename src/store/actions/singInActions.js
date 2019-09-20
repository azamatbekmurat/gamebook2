//import axios from "axios";

// without Promise
// export function signIn(creds) {
//   return dispatch => {
//     dispatch({
//       type: "LOGIN_SUCCESS",
//       payload: creds
//     });

//   };
// }

// with Promise
// export function signIn(creds) {
//   return {
//     type: "LOGIN_SUCCESS",
//     payload: new Promise((resolve, reject) => {
//       resolve(creds);
//     })
//   };
// }

// export function signIn(creds) {
//   return dispatch => {
//     // handling API call
//     return axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         //console.log("axios action", response.data);
//         let users = response.data;

//         let oneUser = users.filter(obj => {
//           return obj.username === creds.username;
//         });

//         if (oneUser[0] === undefined) {
//           throw new Error("no such user");
//         }
//       })

//       .then(() => {
//         dispatch(signInSuccess(creds.username));
//       })
//       .catch(err => {
//         dispatch({ type: "LOGIN_ERROR", err });
//       });
//   };
// }

export const signInSuccess = user => ({
  type: "LOGIN_SUCCESS",
  payload: user
});
