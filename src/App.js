import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllBirds from './components/allBirds/allBirds';
import SingleBird from './components/singleBirds/singleBird.js';


function App() {
  const [birds, setBirds] = useState([]); // State to store the fetched data

  const fetchData = () => {
    fetch("http://localhost:8080/api/v1/birds")
      .then(function(response) {
        if (response.ok) {
          return response.json(); // Parse the response as JSON
        } else {
          throw new Error("Failed to fetch birds");
        }
      })
      .then(function(data) {
        setBirds(data); // Update the state with the fetched data
      })
      .catch(function(error) {
        alert("An error occurred"); // Show error message
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/allBirds" element={<AllBirds birds={birds}/>} />
        <Route path="/bird/:name" element={<SingleBird />} />
      </Routes>

      </Router>
    </div>
  );
}

export default App;
