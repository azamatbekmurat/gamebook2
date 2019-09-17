// without Promise
export function setName(creds) {
  return dispatch => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: creds
    });
  };
}

// with Promise
// export function setName(creds) {
//   return {
//     type: "LOGIN_SUCCESS",
//     payload: new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(creds);
//       }, 3000);
//     })
//   };
// }

// action from SAGA tutorial

//export function ageUpAsync
