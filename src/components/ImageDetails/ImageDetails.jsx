import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ImageDetails.css";

function ImageDetails() {
  const { id } = useParams();
  const [imageDetails, setImageDetails] = useState({});

  async function getImageDetails() {
    try {
      const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
      const imageDetails = response.data.photo;
        setImageDetails(imageDetails);
    } catch (error) {
      console.error("Error fetching image details:", error);
    }
  }

  useEffect(() => {
    getImageDetails();
  }, [id]);

  return (
    <div className="imageDetails-wrapper">
      <div>
        <img className="image" src={imageDetails.url} alt={imageDetails.title} />
      </div>
      <div className="container">
        <div className="title"><h1>{imageDetails.title}</h1></div>
        <div className="description"><p>{imageDetails.description}</p></div>
      </div>
    </div>
  );
}

export default ImageDetails;
