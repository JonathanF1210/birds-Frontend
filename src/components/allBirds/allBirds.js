import React from 'react';
import { Link } from 'react-router-dom';
import './allBirds.css';

const allBirds = ({ birds }) => {
  return (
    <div className="birds-container">
      <h1>All Birds</h1>
      {birds.map((bird) => (
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



export default allBirds;
