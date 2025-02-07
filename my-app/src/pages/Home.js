import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="fade-in">🌍 Explore the World with Maps</h1>
        <p className="slide-up">Find locations, mark places, and navigate easily!</p>
        <Link to="/map" className="explore-btn">
          Start Exploring
        </Link>
      </div>
    </div>
  );
};

export default Home;
