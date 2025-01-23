import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiTypescript, SiWebpack } from "react-icons/si";
import "./styles/TechScroller.css";

const TechScroller = () => {
  const technologies = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaDatabase />, name: "MongoDB" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiWebpack />, name: "Webpack" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <div className="tech-scroller">
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
