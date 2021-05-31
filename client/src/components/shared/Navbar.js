import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlassCheers, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
      <h1>
        {" "}
        <a href="#">
          <FontAwesomeIcon icon={faGlassCheers}  />
        </a>{" "}
        Come to our wedding!
      </h1>
      <p>Don't forget to confirm you're coming!</p>
      </div>
      <ul>
        <li>Hello User</li>
        <li>
          <a href="#!">
            <span className="sm-hide">Logout</span>{" "}
            <FontAwesomeIcon icon={faSignOutAlt} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
