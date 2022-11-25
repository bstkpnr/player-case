import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPlayer from "./pages/AddPlayer";
import ListPLayer from "./pages/ListPlayer";
import React, { useEffect } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {db} from './service/firebase'


function App() {
  const [playersMain, setPlayersMain] = React.useState([]);
  useEffect(()=>{
    const q = query(collection(db, "playerData"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let playersArray = [];
      querySnapshot.forEach((doc) => {
        playersArray.push({ ...doc.data(), id: doc.id });
      });
      setPlayersMain(playersArray);
    });
    return () => unsub();
  },[]);
  const handleEdit = async (player, playerData) => {
    await updateDoc(doc(db, "plaayerData", player.id), { playerData: playerData });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "playerData", id)); }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AddPlayer />} />
          <Route path="/player-list" element={<ListPLayer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
