import React from "react";
import CountGuests from "../guests/CountGuests";
import GuestForm from "../guests/GuestForm";
import GuestsFilter from "../guests/GuestsFilter";
import GuestsList from "../guests/GuestsList";
import SearchGuest from "../guests/SearchGuest";


const Home = () => {
  return (
    <div className="app-container">
      <div className="main">
        <div className="filter">
          <SearchGuest />
          <br />
          <GuestsFilter />
        </div>
        <GuestForm />
        <CountGuests />
      </div>
      <GuestsList />
    </div>
  );
};

export default Home;
