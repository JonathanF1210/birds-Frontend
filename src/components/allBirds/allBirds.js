import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './allBirds.css';

const AllBirds = () => {
  const [birds, setBirds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch the bird data
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
  }, []);

  // Filter the birds based on the search term
  const filteredBirds = birds.filter((bird) =>
    bird.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="birds-container">
      <h1>All Birds</h1>
      <input
        type="text"
        placeholder="Search birds..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredBirds.map((bird) => (
        <div key={bird.id} className="bird-card">
          <Link to={`/bird/${bird.name}`}>
            <strong>{bird.name}</strong>
          </Link>
          <p>{bird.scientificName}</p>
          <br />
          <img src={bird.images} alt={bird.name} />
          <p>{bird.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllBirds;


