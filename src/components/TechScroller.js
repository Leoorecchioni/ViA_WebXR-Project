import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiWebpack, SiUnity, SiBlender } from "react-icons/si";
import "./styles/TechScroller.css";

const TechScroller = () => {
  const technologies = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiBlender />, name: "Blender" },
    { icon: <SiUnity />, name: "Unity" },
    { icon: <SiWebpack />, name: "Webpack" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <div className="tech-scroller">
      <h1>Technology</h1>
      <div className="scroll-content">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-item">
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
        {/* Dupliquer pour un défilement infini */}
        {technologies.map((tech, index) => (
          <div key={index + technologies.length} className="tech-item">
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechScroller;
