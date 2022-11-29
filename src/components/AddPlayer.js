import React, { useState } from "react";
import "../style/mainstyle.scss";
import PlayerDataService from "../service/player-service";
import { useNavigate } from "react-router-dom";

export default function AddPlayer(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const current = new Date();
    const date = `${current.toUTCString()}`;
    const addPlayer = {
      firstName,
      lastName,
      date,
    };
    if (firstName === "" || lastName === "") {
      console.log("Required data missing");
      alert("Please fill the required details");
      return;
    }
    try {
      await PlayerDataService.addPlayerData(addPlayer);
      setFirstName("");
      setLastName("");
      navigate("/list-player");
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <div className="container shadow min-vh-100 py-4 mb-3 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="row mt-5">
            <div className="col-md-5 mx-auto">
              <label className="font-weight-bold">First Name</label>
              <div className="input-group">
                <input
                  className="form-control border"
                  type="text"
                  id="firstname"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5 mx-auto">
              <label className="font-weight-bold">Last Name</label>
              <div className="input-group">
                <input
                  className="form-control border"
                  type="text"
                  id="lastname"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5 mx-auto">
              <button className="btnInput text-white " type="submit">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
