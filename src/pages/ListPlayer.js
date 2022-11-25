import React, { useEffect, useState } from "react";
import {AiFillDelete} from 'react-icons/ai'
import {FaRegEdit} from 'react-icons/fa'

export default function ListPLayer({player,handleDelete,handleEdit}) {
  const [newListData,setNewListData]=useState(player.playerData)
  
  return (
    <div>
      <table className="table">
        <thead>
          <th></th>
          <th scope="col">FirstName</th>
          <th scope="col">LastName</th>
        </thead>
        <tbody>
          {newListData.map((players, index) => {
            return (
              <tr key={index}>
                <td>{players.firstName}</td>
                <td>{players.lastName}</td>
                <div>
    
        <button
          className="button-edit"
          onClick={() => handleEdit(player, newListData)}
        >
          <FaRegEdit id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(player.id)}>
          <AiFillDelete id="i" />
        </button>
      </div>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
