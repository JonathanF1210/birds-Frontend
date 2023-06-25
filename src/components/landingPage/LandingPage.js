import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  const [bird, setBird] = useState(null);

  useEffect(() => {
    const birdNames = [
      "Northern Cardinal",
      "Great Horned Owl",
      "Blue Jay",
      "Painted Bunting",
    ];

    const fetchBirdData = async () => {
      try {
        const birdData = await Promise.all(
          birdNames.map(async (name) => {
            const response = await fetch(`http://localhost:8080/name/${name}`);
            if (!response.ok) {
              throw new Error("Failed to fetch bird data");
            }
            const data = await response.json();
            return data;
          })
        );
        setBird(birdData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBirdData();
  }, []);

  if (!bird) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  // Divide the bird array into two halves
  const halfLength = Math.ceil(bird.length / 2);
  const firstHalf = bird.slice(0, halfLength);
  const secondHalf = bird.slice(halfLength);

  return (
    <div className="landing-page">
      <nav className="navPages">
        <Link to="/allBirds" className="nav-link">All Birds</Link>

        <Link to="/birdlist" className="nav-link">Watch List</Link>

        <Link to="/dataform" className="nav-link">Bird Data Form</Link>
      </nav>
      <div className="container">
        <h1>Welcome to Bird View</h1>

        <div className="bird-container bird-container--one">
          <div className="bird bird--one"></div>
        </div>

        <div className="bird-container bird-container--two">
          <div className="bird bird--two"></div>
        </div>

        <div className="bird-container bird-container--three">
          <div className="bird bird--three"></div>
        </div>

        <div className="bird-container bird-container--four">
          <div className="bird bird--four"></div>
        </div>
      </div>
      <nav className="nav-container">
        <Link to="/allBirds" className="toAllBirds-button nav-link">
          Check out our full list of birds
        </Link>
        <Link to="/BirdList" className="toBirdList-button nav-link">
          Check out your personal bird watch list
        </Link>
      </nav>

      <div className="section-container">
        <div className="birdList-section">
          {firstHalf.map((bird) => (
            <div key={bird.id} className="bird-card">
              <Link to={`/bird/${bird.name}`} className="nav-link">
                <strong>{bird.name}</strong>
              </Link>
              <p>{bird.scientificName}</p>
              <img src={bird.images} alt={bird.name} />
            </div>
          ))}
        </div>
        <div className="allBirds-section">
          {secondHalf.map((bird) => (
            <div key={bird.id} className="bird-card">
              <Link to={`/bird/${bird.name}`} className="nav-link">
                <strong>{bird.name}</strong>
              </Link>
              <p>{bird.scientificName}</p>
              <img src={bird.images} alt={bird.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
