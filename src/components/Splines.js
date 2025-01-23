import React from "react";
import "./styles/Splines.css";

const Splines = () => {
  return (
    <div className="fullscreen-container">
      <iframe
        src="https://prod.spline.design/YOUR-MODEL-ID/scene.splinecode"
        frameBorder="0"
        className="spline-view"
        title="Spline Model"
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default Splines;