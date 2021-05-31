import React, { useRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import GuestContext from "../../context/guestsContext/guestContext";

const SearchGuest = () => {
  const { searchForGuest, clearSearchGuest } = useContext(GuestContext);
  const searchValue = useRef("");

  const onchange = (e) => {
    if (searchValue.current.value !== "") {
      searchForGuest(e.target.value);
    } else {
      clearSearchGuest();
    }
  };

  return (
    <div>
      <input
        ref={searchValue}
        type="text"
        className="search"
        placeholder="Search by name"
        onChange={onchange}
      />{" "}
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default SearchGuest;
