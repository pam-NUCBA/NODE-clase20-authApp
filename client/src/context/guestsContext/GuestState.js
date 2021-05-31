import React, { useReducer } from "react";
import axios from "axios";
import GuestContext from "./guestContext";
import guestReducer from "./guestReducer";
import {
  GUEST_FILTER,
  SEARCH_GUEST,
  CLEAR_SEARCH,
  REMOVE_GUEST,
  ADD_GUEST,
  EDIT_GUEST,
  CLEAR_EDIT,
  UPDATE_GUEST,
  GET_GUESTS,
  GUESTS_ERROR,
  CLEAR_GUESTS,
} from "../types";

const GuestState = (props) => {
  const initialState = {
    guests: [
      {
        id: 1,
        name: "Juan",
        phone: "15 1543-5584",
        diet: "none",
        isConfirmed: false,
      },
      {
        id: 2,
        name: "Juana",
        phone: "15 183-5584",
        diet: "celiac",
        isConfirmed: true,
      },
      {
        id: 3,
        name: "Anahí",
        phone: "15 4643-7554",
        diet: "diabetic",
        isConfirmed: true,
      },
    ],
    filterGuests: false,
    searchGuest: null,
    editGuest: null,
    error: null,
  };
  const [state, dispatch] = useReducer(guestReducer, initialState);

  //get all
  const getGuests = async () => {
    try {
      dispatch({
        type: GET_GUESTS,
        payload: initialState.guests,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //filter guests
  const filterConfirmedGuests = async () => {
    try {
      dispatch({
        type: GUEST_FILTER,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //search for a guest:
  const searchForGuest = (guest) => {
    try {
      dispatch({
        type: SEARCH_GUEST,
        payload: guest,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const clearSearchGuest = () => {
    try {
      dispatch({
        type: CLEAR_SEARCH,
      });
    } catch (err) {
      dispatch({
        type: GUESTS_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Edit Guest
  const editGuestValues = (guest) => {
      dispatch({
        type: EDIT_GUEST,
        payload: guest,
      });
  };

  const removeGuest = (id) => {
      dispatch({
        type: REMOVE_GUEST,
        payload: id
      });
  };

  const addGuest = async (guest) => {
    guest.id = Date.now();
    guest.isConfirmed = false;

    dispatch({
      type: ADD_GUEST,
      payload: guest,
    });
  };

  const updateGuest = (guest) => {
      dispatch({
        type: UPDATE_GUEST,
        payload: guest
      });
  };

  const clearEdit = () => {
    dispatch({
      type: CLEAR_EDIT,
    });
  };

  const clearGuests = () => {
    dispatch({
      type: CLEAR_GUESTS,
    });
  };

  return (
    <GuestContext.Provider
      value={{
        guests: state.guests,
        filterGuests: state.filterGuests,
        searchGuest: state.searchGuest,
        editGuest: state.editGuest,
        error: state.error,
        getGuests,
        filterConfirmedGuests,
        searchForGuest,
        clearSearchGuest,
        editGuestValues,
        removeGuest,
        addGuest,
        updateGuest,
        clearEdit,
        clearGuests,
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestState;
