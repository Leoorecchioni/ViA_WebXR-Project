import React, { useState } from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
// import Splines from './components/Splines'
import StartImage from './img/startimg.jpg';
import TechScroller from "./components/TechScroller";

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
              <li>Our project uses augmented reality (AR) to improve the accuracy and safety of surgical procedures.</li>
              <li>By superimposing essential medical information (pathologies, allergies, medical imaging) directly in the surgeon's field of vision, we aim to reduce errors and facilitate operations.</li>
              <li>The system also enables remote assistance from medical experts.</li>
            <br/>
            <h2>Context</h2>
              <ul>
                <li>Surgeons currently have to consult external screens to access critical information, which can disrupt the operation.</li>
                <li>Our AR solution enables this data to be seamlessly integrated into the field of vision, providing greater fluidity and safety during operations.</li>
              </ul>
            </ul>
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

      {/* Autres sections */}
      <TechScroller />

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Next steps</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>Prototype</h3>
              <p>Development of the information overlay system.</p>
            </div>
            <div className="feature-item">
              <h3>Simulated tests</h3>
              <p>Validation with surgeons under controlled conditions.</p>
            </div>
            <div className="feature-item">
              <h3>Pilot deployment</h3>
              <p>Hospital trial to adjust the system in real-life conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Model Container */}
      <div className="model-container">
        {isFilterVisible && (
          <div className="filter">
            <p>Click to access the 3D model</p>
            <a href="https://my.spline.design/untitled-a5fb281bcf408a799e1888620a2b2026/" target='_blank' rel='noopener noreferrer'>
              <button>Access</button>
            </a>
          </div>
        )}

        {/* Replace the URL with the link to your Spline model */}
        <iframe
          src="https://my.spline.design/untitled-a5fb281bcf408a799e1888620a2b2026/"
          frameBorder="0"
          className="model-3d"
          title="Spline Model"
          allow="autoplay; fullscreen"
        />
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
