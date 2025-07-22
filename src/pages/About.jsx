import React from "react";
import ProfilePic from "../assets/Images/ProfilePicture.png";

const About = () => (
  <div className="container mt-4">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <img
          src={ProfilePic}
          className="rounded-circle"
          alt="Profile"
          width="150"
          height="150"
        />
        <h1 className="mb-3">About Us</h1>
        <p className="lead">
          Welcome to Reactory! It is a streamlined web application designed to
          facilitate the integration and showcasing of assignments for React
          training programs.
        </p>
      </div>
    </div>
  </div>
);

export default About;
