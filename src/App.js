import React, { useState } from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
// import Splines from './components/Splines'
import StartImage from './img/startimg.jpg';
// import TechScroller from "./components/TechScroller";

function App() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const handleAccessClick = () => {
    setIsFilterVisible(false);
  };

  return (
    <div>
      <NavbarComponent />

      {/* Introduction Section */}
      <section className="intro">
        <div className="container">
          <div className="text-content">
            <h1>Augmented Reality Project for <br/>Real-Time Surgical Assistance</h1>
            <p>Integrating AR into the surgeon’s workflow offers real-time insights and minimizes distractions</p>
            <button>LEARN MORE</button>
          </div>
          <div className="image-content">
            <img src={StartImage} alt="VR for Medicine" />
          </div>
        </div>
      </section>

      {/* Project Goals Section */}
      <section className="goals">
        <div className="container">
            <h2>Project Goals</h2>
            <ul>
              <li>Enhance medical training for healthcare professionals through realistic simulations.</li>
              <li>Offer a new approach to patient care using immersive experiences.</li>
              <li>Make access to complex medical procedures simpler and easier to understand.</li>
            </ul>
        </div>
      </section>

      {/* 3D Model Container */}
      <div className="model-container">
        {isFilterVisible && (
          <div className="filter">
            <p>Click to access the 3D model</p>
            <button onClick={handleAccessClick}>Access</button>
          </div>
        )}

        {/* Replace the URL with the link to your Spline model */}
        <iframe
          src="https://my.spline.design/glasseffectcopy-ad7ddded331c160864c50af98e292350/"
          frameBorder="0"
          className="model-3d"
          title="Spline Model"
          allow="autoplay; fullscreen"
        />
      </div>

      {/* Autres sections */}
      {/* <TechScroller /> */}

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>Medical Simulations</h3>
              <p>Immersive environments for hands-on training on medical procedures.</p>
            </div>
            <div className="feature-item">
              <h3>Accessibility</h3>
              <p>Patients and professionals can access VR simulations from anywhere.</p>
            </div>
            <div className="feature-item">
              <h3>Tracking and Assessments</h3>
              <p>Track user progress with real-time skill assessments.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Autres sections */}
      <div>
        <div className="container-spline-part2">
          <iframe
              src="https://my.spline.design/glasseffectcopycopy-49fe0d7a529bfee005337531d606fadc/"
              frameBorder="0"
              className="model-3d"
              title="Spline Model"
              allow="autoplay; fullscreen"
            />
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>For more information about the project or for collaborations, contact us at:</p>
          <p>Email: <a href="mailto:contact@vrmedproject.com">contact@vrmedproject.com</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 VR Project for Medicine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
