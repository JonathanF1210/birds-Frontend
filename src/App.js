import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllBirds from "./components/allBirds/allBirds";
import SingleBird from "./components/singleBirds/singleBird";
import BirdList from "./components/birdList/BirdList";
import LandingPage from "./components/landingPage/LandingPage";
import DataForm from "./components/dataForm/DataForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/allBirds" element={<AllBirds />} />
          <Route path="/bird/:name" element={<SingleBird />} />
          <Route path="/birdlist" element={<BirdList />} />
          <Route path="/dataform" element={<DataForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
