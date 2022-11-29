import "./style/App.scss";
import AddPlayer from "./components/AddPlayer";
import React, { useContext } from "react";
import ListPLayer from "./components/ListPlayer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddPlayer />} />
          <Route path="list-player" element={<ListPLayer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
