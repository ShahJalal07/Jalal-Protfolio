import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";
const About = () => {
  return (
    <section className="container about section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about info">
            <p className="about_description">
              Hello! I'm Md Shah Jalal, a passionate and detail-oriented
              Frontend Developer with a strong focus on creating beautiful,
              responsive, and user-friendly web applications. With expertise in
              HTML, CSS, and modern front-end technologies like Tailwind CSS,
              Bootstrap, JavaScript, React JS, and Redux, I strive to build
              seamless, performant, and accessible digital experiences.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Frontend Developer</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage fontend "></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">CSS AND TAILWINDCSS</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage CSS"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">React JS</h3>
                <span className="skills_number">70%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage react"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
