import * as types from "./actionTypes";
import axios from "../axios/axios";

const serverUrl = `http://localhost:5000`;

export const login = user => dispatch => {
  dispatch(spinnerOn());
  dispatch({ type: types.LOGIN_STARTED });
  axios()
    .post(
      `${serverUrl}/api/login?username=${user.username}&password=${
        user.password
      }`,
      user
    )
    .then(data => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: data.data.payload });
      dispatch(spinnerOff());
      dispatch(setFriends());
    })
    .catch(data => {
      dispatch({ type: types.LOGIN_FAILED });
      dispatch(spinnerOff());
    });
};

export const setFriends = () => dispatch => {
  dispatch(spinnerOn());
  dispatch({ type: "FETCHING_FRIENDS" });
  axios()
    .get(`${serverUrl}/api/friends`)
    .then(res => {
      dispatch({ type: types.GET_FRIENDS, payload: res.data });
      dispatch(spinnerOff());
    })
    .catch(res => {
      dispatch(setError(res.statusText));
      dispatch(spinnerOff());
    });
};
export const addFriendAsync = friend => dispatch => {
  axios()
    .post(`${serverUrl}/api/friends`, friend)
    .then(res => {
      dispatch({ type: types.ADD_FRIEND, payload: res.data });
    })
    .catch(res => {
      dispatch(setError(res.data));
    });
};
export const deleteFriendAsync = id => dispatch => {
  axios()
    .delete(`${serverUrl}/api/friends/${id}`)
    .then(res => {
      dispatch({ type: types.DELETE_FRIEND, payload: res.data });
    })
    .catch(res => {
      dispatch(setError(res.statusText));
    });
};
export const updateFriendAsync = friend => dispatch => {
  axios()
    .put(`${serverUrl}/api/friends/${friend.id}`, friend)
    .then(res => {
      console.log(res.data);
      dispatch({ type: types.UPDATE_FRIEND, payload: res.data });
    })
    .catch(res => {
      dispatch(setError(res.statusText));
    });
};

function setError(error) {
  return {
    type: types.ADD_FRIEND,
    payload: { error }
  };
}

function spinnerOn() {
  return {
    type: types.SPINNER_ON
  };
}
function spinnerOff() {
  return {
    type: types.SPINNER_OFF
  };
}
