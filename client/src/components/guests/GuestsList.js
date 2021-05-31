import React, { useContext } from "react";
import GuestContext from "../../context/guestsContext/guestContext";
import GuestItem from "./GuestItem";

const GuestsList = () => {
  const guestContext = useContext(GuestContext);
  const { guests, filterGuests, searchGuest } = guestContext;

  return (
    <div className="guests">
      {searchGuest !== null ?
      searchGuest.map(guest => (
        <GuestItem guest={guest} key={guest.id} />
      )) :
      guests
        .filter((guest) => !filterGuests || guest.isConfirmed)
        .map((guest) => (
          <GuestItem guest={guest} key={guest.id} />
        ))}
    </div>
  );
};

export default GuestsList;
