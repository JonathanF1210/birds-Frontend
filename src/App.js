import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllBirds from './components/allBirds/allBirds';
import SingleBird from './components/singleBirds/singleBird';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/allBirds" element={<AllBirds />} />
          <Route path="/bird/:name" element={<SingleBird />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

