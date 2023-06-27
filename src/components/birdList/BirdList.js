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
    <div>
      <nav className="navPages">
        <Link to="/allBirds" className="nav-link">
          All Birds
        </Link>

        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/dataform" className="nav-link">
          Bird Data Form
        </Link>
      </nav>
      <h1>Bird List</h1>
      <div className="birds-container-watchlist">
      {birdList.length === 0 ? (
        <p>No birds found in the list.</p>
      ) : (
        birdList.map((bird) => (
          <div key={bird.id} className="bird-card-watchlist">
            <Link to={`/bird/${bird.name}`} className="nav-link body-link">
              <strong>{bird.name}</strong>
            <p>{bird.scientificName}</p>
            </Link>
            <br />
            <img src={bird.images} alt={bird.name} />
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default BirdList;
