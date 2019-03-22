import * as types from "./actionTypes";

const initialObject = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

export function FriendList(state = initialObject, action) {
  switch (action.type) {
    case "FETCHING_FRIENDS":
      return { ...state, fetchingFriends: true };
    case types.GET_FRIENDS:
      return { ...state, friends: action.payload, fetchingFriends: false };
    case types.LOGIN_STARTED:
      return { ...state, loggingIn: true };
    case types.LOGIN_SUCCESS:
      return { ...state, loggingIn: false };
    case types.ADD_FRIEND:
      return { ...state, friends: action.payload };
    case types.DELETE_FRIEND:
      return { ...state, friends: action.payload };
    case types.UPDATE_FRIEND:
      return { ...state, friends: action.payload };
    default:
      return state;
  }
}
export function Spinner(state = false, action) {
  switch (action.type) {
    case types.SPINNER_ON:
      return true;
    case types.SPINNER_OFF:
      return false;
    default:
      return state;
  }
}
