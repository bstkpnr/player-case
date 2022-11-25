import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddPlayer from "./pages/AddPlayer";
import ListPLayer from "./pages/ListPlayer";

function App() {
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
