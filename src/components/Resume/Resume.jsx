import React from "react";
import "./resume.css";
import Data from "./Data";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section_title">Experiance</h2>
      <div className="resume_container grid">
        <div className="timeline grid"></div>
      </div>
    </section>
  );
};

export default Resume;
