import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BirdList.css";

const BirdList = () => {
  const [birdList, setBirdList] = useState([]);

  useEffect(() => {
    // Retrieve bird list from local storage
    const storedBirdList = localStorage.getItem("birdList");
    if (storedBirdList) {
      setBirdList(JSON.parse(storedBirdList));
    }
  }, []);

  return (
    <div className="birds-container">
      <nav className="navPages">
        <Link to="/allBirds" className="nav-link">
          All Birds
        </Link>

        <Link to="/birdlist" className="nav-link">
          Watch List
        </Link>

        <Link to="/dataform" className="nav-link">
          Bird Data Form
        </Link>
      </nav>
      <h1>Bird List</h1>
      {birdList.length === 0 ? (
        <p>No birds found in the list.</p>
      ) : (
        birdList.map((bird) => (
          <div key={bird.id} className="bird-card">
            <Link to={`/bird/${bird.name}`}>
              <strong>{bird.name}</strong>
            </Link>
            <p>{bird.scientificName}</p>
            <br />
            <img src={bird.images} alt={bird.name} />
            <p>{bird.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BirdList;
