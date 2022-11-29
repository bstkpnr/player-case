import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import PlayerDataService from "../service/player-service";
import { AiFillDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ListPLayer() {
  const [playerDatas, setPlayerDatas] = useState([]);
  const [availableDataId, setAvailableDataId] = useState("");
  const [availableDataFirstName, setAvailableDataFirstName] = useState("");
  const [availableDataLastName, setAvailableDataLastName] = useState("");
  const [selectGroup, setSelectGroup] = useState(["Group 1", "Group 2"]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    getPlayers();
  }, [playerDatas]);

  const handleUpdate = async () => {
    const current = new Date();
    const date = `${current.toUTCString()}`;

    if (availableDataFirstName === "" || availableDataLastName === "") {
      console.log("Required data missing");
      alert("Please fill the required details");
      return;
    }

    const updatedPlayers = {
      firstName: availableDataFirstName,
      lastName: availableDataLastName,
      date,
      group: selectGroup,
    };

    try {
      await PlayerDataService.updatePlayerData(availableDataId, updatedPlayers);
    } catch (err) {
      console.log(err);
      return;
    }
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const getPlayers = async () => {
    try {
      const data = await PlayerDataService.getAllPlayerData();
      setPlayerDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const editPlayers = async (id, name, nameLast) => {
    setOpen(true);
    setAvailableDataId(id);
    setAvailableDataFirstName(name);
    setAvailableDataLastName(nameLast);
    console.log("tıklandı");
  };
  const deletePlayers = async (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        await PlayerDataService.deletePlayerData(id);
      } catch (err) {
        console.log(err);
        return;
      }
    }
  };

  const handleChange = (e) => {
    setSelectGroup(e.target.value);
  };

  return (
    <div className="container shadow min-vh-100 py-4 mt-3 mb-3">
      <table className="table">
        <thead>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Created Date</th>
          <th></th>
        </thead>
        <tbody>
          {playerDatas.map((players) => (
            <tr key={players.id}>
              <td>{players.firstName}</td>
              <td>{players.lastName}</td>
              <td>{players.date}</td>

              <td>
                <div>
                  <span>
                    <div className="dropdown">
                      <a
                        className="btn btn-secondary dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onChange={handleChange}
                      >
                        Select
                      </a>

                      <ul class="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onChange={handleChange}
                          >
                            Group 1
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="#"
                            onChange={handleChange}
                          >
                            Group 2
                          </a>
                        </li>
                      </ul>
                    </div>
                  </span>
                  <span>
                    <FaRegEdit
                      id="i"
                      color="#5CB8E4"
                      size={24}
                      onClick={() =>
                        editPlayers(
                          players.id,
                          players.firstName,
                          players.lastName,
                          players.date
                        )
                      }
                    />
                  </span>
                  <span>
                    <AiFillDelete
                      id="i"
                      color="red"
                      onClick={() => deletePlayers(players.id)}
                      size={24}
                    />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <table className="table">
          <thead>
            <th scope="col">Group 1</th>
            <th scope="col">Group 2</th>
          </thead>
          {selectGroup === "Group1" ? (
            playerDatas.map((e) => {
              <tr>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
              </tr>;
            })
          ) : selectGroup === "Group2" ? (
            playerDatas.map((e) => {
              <tr>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
              </tr>;
            })
          ) : (
            <></>
          )}
        </table>
      </div>
      <Modal show={open} onHide={handleUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mt-5">
            <div className="col-md-5 mx-auto">
              <label>FirstName</label>
              <div className="input-group">
                <input
                  className="form-control border"
                  type="text"
                  id="firstname"
                  name="firstName"
                  value={availableDataFirstName}
                  onChange={(e) => setAvailableDataFirstName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5 mx-auto">
              <label>LastName</label>
              <div className="input-group">
                <input
                  className="form-control border"
                  type="text"
                  id="lastname"
                  name="lastName"
                  value={availableDataLastName}
                  onChange={(e) => setAvailableDataLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Updated
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
