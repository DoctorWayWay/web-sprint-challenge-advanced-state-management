// Libraries
import axios from "axios";

// Constants
export const FETCH_SMURFS_INITIAL = "FETCH_SMURFS_INITIAL";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

// Actions
export const fetchInitial = () => {
  return { type: FETCH_SMURFS_INITIAL };
};

export const fetchSuccess = (smurfs) => {
  return { type: FETCH_SMURFS_SUCCESS, payload: smurfs };
};

export const fetchFailure = (error) => {
  return { type: FETCH_SMURFS_FAILURE, payload: error };
};

export const addSmurf = (smurf) => {
  return {
    type: ADD_SMURF,
    payload: {
      name: smurf.name,
      nickname: smurf.nickname,
      position: smurf.position,
      description: smurf.description,
      id: Date.now(),
    },
  };
};

export const addSmurfError = (error) => {
  return { type: ADD_SMURF_FAILURE, payload: error };
};

// Thunk Action
export const fetchSmurfs = () => {
  return (dispatch) => {
    dispatch(fetchInitial());
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFailure("Failed to retrieve data &#9785;"));
      });
  };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
