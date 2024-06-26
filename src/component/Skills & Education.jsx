/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/Styles/skills.css";

const Skills = () => {
  return (
    <div>
      <section id="skills">
        <div className="skills main-container">
          <h3 className="pre-tittle">Learning Path</h3>
          <h1 className="section-tittle">Skills & Education</h1>

          <div className="skills-grid">
            <div className="skills-left">
              <div className="education">
                <div className="line">
                  <div></div>
                </div>

                <div className="education-info">
                  <h4 className="education-tittle">Alharamain Saudi Academy</h4>
                  <p>Senior High School</p>
                  <h4 className="education-years">2011 - 2014</h4>
                </div>
              </div>

              <div className="education">
                <div className="line">
                  <div></div>
                </div>

                <div className="education-info">
                  <h4 className="education-tittle">Pakuan University</h4>
                  <p>Bachelor Degree - Geology Engineer</p>
                  <h4 className="education-years">2014 - 2019</h4>
                </div>
              </div>

              <div className="education">
                <div className="line">
                  <div></div>
                </div>

                <div className="education-info">
                  <h4 className="education-tittle">Purwadhika</h4>
                  <p>Bootcamp - Full Stack Web Developer</p>
                  <h4 className="education-years">2024</h4>
                </div>
              </div>
            </div>

            <div className="skills-right">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis veniam et eos dolore saepe possimus excepturi nam,
                minus consequuntur aliquam, temporibus iusto voluptas natus
                cumque dolores beatae culpa voluptatum ipsa.
              </p>

              <div className="skills-list">
                <ul>
                  <li>React JS</li>
                  <li>Vite</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>

                <ul>
                  <li>React JS</li>
                  <li>Vite</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Skills };
