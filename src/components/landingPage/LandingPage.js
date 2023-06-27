import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  const [bird, setBird] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const birdNames = [
      "Northern Cardinal",
      "Great Horned Owl",
      "Blue Jay",
      "Painted Bunting",
      "American Crow"
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
  const halfLength = Math.ceil(bird.length / 3);
  const firstHalf = bird.slice(0, halfLength);
  const secondHalf = bird.slice(halfLength);

  const handleButtonClick = () => {
    window.location.href = `/bird/${searchTerm}`;
  }


  return (
    <div className="landing-page">
      <nav className="navPages">
        <Link to="/allBirds" className="nav-link hoverable">All Birds</Link>

        <Link to="/birdlist" className="nav-link hoverable">Watch List</Link>

        <Link to="/dataform" className="nav-link hoverable">Bird Data Form</Link>
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
      
      <p>Bird View is a site where you can find information on species of birds
        and create your own watch list.
      </p>
      <p>To get started, search or click on a bird below and start adding birds to your watch list</p>
      <input
        id="searchBird-ladning"
        type="text"
        placeholder="Search birds..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
            id="searchBird-button"
            onClick={handleButtonClick}
          >Search</button>

      <div className="section-container">
        <div className="birdList-section">
          {firstHalf.map((bird) => (
            <Link to={`/bird/${bird.name}`} className="nav-link body-link">
            <div key={bird.id} className="bird-card">
                <strong>{bird.name}</strong>
              
              <p>{bird.scientificName}</p>
              <img src={bird.images} alt={bird.name} />
            </div>
            </Link>
          ))}
        </div>
        <div className="allBirds-section">
          {secondHalf.map((bird) => (
            <Link to={`/bird/${bird.name}`} className="nav-link body-link">
            <div key={bird.id} className="bird-card">
                <strong>{bird.name}</strong>
              <p>{bird.scientificName}</p>
              <img src={bird.images} alt={bird.name} />
            </div>
            </Link>
          ))}
        </div>
      </div>
      <Link to="/allBirds" className="nav-link body-link hoverable">
      <h2>Check out a list of all of our birds</h2>
      </Link>
      <footer className="footer-container">
        <div>
          <p>View the beauty of birds with Bird View</p>
        </div>
        <div>
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;
