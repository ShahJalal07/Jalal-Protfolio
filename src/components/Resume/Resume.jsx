import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section_title">Experiance</h2>
      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.catagary === "Education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  year={val.year}
                  title={val.title}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.catagary === "Experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  year={val.year}
                  title={val.title}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
