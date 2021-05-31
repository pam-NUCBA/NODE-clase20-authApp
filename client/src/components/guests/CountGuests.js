import React, { useContext } from "react";
import GuestContext from "../../context/guestsContext/guestContext";

const CountGuests = () => {
  const { guests } = useContext(GuestContext);

  const confirmed = guests.filter((guest) => guest.isconfirmed);

  const countByDiet = (diet) => {
    return {
      total: guests.filter((guest) => guest.diet === diet).length,
      confirmed: confirmed.filter((guest) => guest.diet === diet).length,
    };
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Guests</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th>No dietary restriction</th>
            <td>{countByDiet("none").total}</td>
            <td>{countByDiet("none").confirmed}</td>
          </tr>
          <tr>
            <th>Vegetarian</th>
            <td>{countByDiet("vegetarian").total}</td>
            <td>{countByDiet("vegetarian").confirmed}</td>
          </tr>
          <tr>
            <th>Vegan</th>
            <td>{countByDiet("vegan").total}</td>
            <td>{countByDiet("vegan").confirmed}</td>
          </tr>
          <tr>
            <th>Celiac</th>
            <td>{countByDiet("celiac").total}</td>
            <td>{countByDiet("celiac").confirmed}</td>
          </tr>
          <tr>
            <th>Diabetic</th>
            <td>{countByDiet("diabetic").total}</td>
            <td>{countByDiet("diabetic").confirmed}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{guests.length}</td>
            <td>{confirmed.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountGuests;
