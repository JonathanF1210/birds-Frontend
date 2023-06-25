import React from "react";
import "./DataForm.css";
import { Link } from "react-router-dom";

const CreateBirdForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Create a new FormData object to collect form data
    const formData = new FormData(event.target);

    try {
      // Send a POST request to the server with the form data
      const response = await fetch("http://localhost:8080/api/v1/newBird", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Bird created successfully"); // Show success message
        // Clear form fields after successful submission
        event.target.reset();
      } else {
        alert("Failed to create bird"); // Show error message
      }
    } catch (error) {
      alert("An error occurred"); // Show error message
      console.error(error);
    }
  };

  return (
    <div className="form-container">
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
      <h1>Bird Data Form</h1>
      <form onSubmit={handleSubmit} id="birdForm">
        <div className="flex-container">
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="scientificName">Scientific Name:</label>
            <input
              type="text"
              id="scientificName"
              name="scientificName"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
          </div>
          <div className="form-row">
            <label htmlFor="images">Images:</label>
            <input type="text" id="images" name="images" required />
          </div>
          <div className="form-row">
            <label htmlFor="breedingSeason">Breeding Season:</label>
            <input
              type="text"
              id="breedingSeason"
              name="breedingSeason"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="diet">Diet:</label>
            <input type="text" id="diet" name="diet" required />
          </div>
          <div className="form-row">
            <label htmlFor="countriesFound">
              Countries Found (separated by commas):
            </label>
            <input
              type="text"
              id="countriesFound"
              name="countriesFound"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="distributionImage">Distribution Image:</label>
            <input
              type="text"
              id="distributionImage"
              name="distributionImage"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="distribution">Distribution:</label>
            <input type="text" id="distribution" name="distribution" required />
          </div>
          <div className="form-row">
            <label htmlFor="timeMostActive">
              Time Most Active (separated by commas):
            </label>
            <input
              type="text"
              id="timeMostActive"
              name="timeMostActive"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="order">Order:</label>
            <input type="text" id="order" name="order" required />
          </div>
          <div className="form-row">
            <label htmlFor="family">Family:</label>
            <input type="text" id="family" name="family" required />
          </div>
          <div className="form-row">
            <label htmlFor="wingspan">Wingspan:</label>
            <input type="text" id="wingspan" name="wingspan" required />
          </div>
          <div className="form-row">
            <label htmlFor="height">Height:</label>
            <input type="text" id="height" name="height" required />
          </div>
          <div className="form-row">
            <label htmlFor="weight">Weight:</label>
            <input type="text" id="weight" name="weight" required />
          </div>
          <div className="form-row">
            <label htmlFor="conservationStatus">Conservation Status:</label>
            <input
              type="text"
              id="conservationStatus"
              name="conservationStatus"
              required
            />
          </div>
        </div>
        <div>
          <br />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateBirdForm;
