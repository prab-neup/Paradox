import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Welcome to Paradox</h1>

      {/* Video Section */}
      <div className="video-section">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TSuw8z_027A?si=lKKC55ueoOEXo50b"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* Heading */}
      <h2 className="heading">Building the future</h2>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-box">
          <img src="/original.jpg" alt="Feature 1" />
        </div>
        <div className="text-box">
          <h2>
            Features <span className="highlight">Ought</span> to Partake
          </h2>{" "}
          <p></p>
        </div>
        <div className="feature-box">
          <img src="/work_culture.png" alt="Feature 2" />
        </div>
        <div className="feature-box">
          <img src="/first.jpg" alt="Feature 3" />
        </div>
        <div className="feature-box">
          <img src="/earth.png" alt="Feature 4" />
        </div>
      </div>

      <div className="inspiration-section">
        <img
          src="/nature.jpg"
          alt="Nature inspiration"
          className="inspiration-image"
        />
        <div className="overlay">
          <h2>Every inspiration from nature</h2>
          <p>Get started using our services with a 30-day free trial</p>
          <button onClick={() => navigate("/pricing")}>Try it now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
