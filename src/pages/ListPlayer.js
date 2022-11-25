import React, { useEffect, useState } from "react";

export default function ListPLayer() {
  const playerModel = {
    id: "",
    firstName: "",
    lastName: "",
  };

  const [player, setPlayer] = useState([playerModel]);
  return (
    <div>
      <table className="table">
        <thead>
          <th></th>
          <th scope="col">FirstName</th>
          <th scope="col">LastName</th>
        </thead>
        <tbody>
          {player.map((players, index) => {
            return (
              <tr key={index}>
                <td>{players.firstName}</td>
                <td>{players.lastName}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
