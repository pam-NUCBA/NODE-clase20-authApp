import React, {useContext} from "react";
import GuestContext from '../../context/guestsContext/guestContext'

const GuestsFilter = () => {
    const { filterConfirmedGuests } = useContext(GuestContext)


  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" onChange={()=> filterConfirmedGuests()} />
        <span className="slider round"></span>
      </label>
      <p className="lead">Show confirmed</p>
    </div>
  );
};

export default GuestsFilter;
