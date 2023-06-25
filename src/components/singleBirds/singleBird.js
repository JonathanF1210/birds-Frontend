import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./singleBird.css";

const SingleBird = () => {
  const { name } = useParams(); // Access the "name" parameter from the URL
  const [bird, setBird] = useState(null);

  useEffect(() => {
    // Fetch the data for the specific bird by its name
    fetch(`http://localhost:8080/name/${name}`)
      .then((response) => response.json())
      .then((data) => setBird(data))
      .catch((error) => console.error(error));
  }, [name]);

  if (!bird) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div>
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
      <h2>{bird.name}</h2>
      <img src={bird.images} alt={bird.name} />
      <p>{bird.description}</p>
      <p>
        <strong>Order: </strong>
        {bird.order}
      </p>
      <p>
        <strong>Family: </strong>
        {bird.family}
      </p>
      <p>
        <strong>height: </strong>
        {bird.height}
      </p>
      <p>
        <strong>weight: </strong>
        {bird.weight}
      </p>
      <p>
        <strong>wingspan: </strong>
        {bird.wingspan}
      </p>
      <p>
        <strong>diet: </strong>
        {bird.diet}
      </p>
      <p>
        <strong>Order: </strong>
        {bird.order}
      </p>
      <p>
        <strong>Times of Day Active: </strong>
        {bird.timeMostActive}
      </p>
      <p>
        <strong>Conservation Status: </strong>
        {bird.conservationStatus}
      </p>
      <img src={bird.distributionImage} alt={bird.distributionImage} />
      <p>
        <strong>Distribution: </strong>
        {bird.distribution}
      </p>
      <p>
        <strong>Breeding Season: </strong>
        {bird.breedingSeason}
      </p>
      <p>
        <strong>Countries Found: </strong>
        {bird.countriesFound}
      </p>
    </div>
  );
};

export default SingleBird;
