import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
          <div
            className={
              toggleState === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Other Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">IT-Software Development</h3>
                <span className="qualification__subtitle">
                  Southern Alberta Insitute of Technology (SAIT) - CA<br/>
                  3.8/4.0 GPA
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Full Stack Development Program</h3>
                <span className="qualification__subtitle">
                  Harvest Builders Bootcamp - CA <br/>
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fine Arts & Media Arts</h3>
                <span className="qualification__subtitle">
                Kyung Hee University (KHU) - KR <br/>
                  3.743/4.3 GPA
                  Second-highest GPA in a class of 2015
                </span>
                <div className="qualification__calender">
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

         <div className="qualification__data">
              <div></div>

               <div>
                <span className="qualification__rounder"></span>
              </div> 

               <div>
                <h3 className="qualification__title">Fine Arts</h3>
                <span className="qualification__subtitle">
                Goyang High School of Arts - KR
                </span>
                <div className="qualification__calender">
                </div>
              </div> 
             </div> 
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              
              <div>
                <h3 className="qualification__title">Software Engineer</h3>
                <span className="qualification__subtitle">
                  Internship <br/>
                  OceanML Corporation - Calgary, CA
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Fullstack Developer</h3>
                <span className="qualification__subtitle">
                  Capstone Project <br/>
                  Boss & Hoss Irrigation Corporation - Calgary, CA
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fullstack Developer</h3>
                <span className="qualification__subtitle">
                Volunteering <br/>
                New Idea Machine - Calgary, CA
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022-2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          <div className="qualification__data">
              <div></div>

               <div>
                <span className="qualification__rounder"></span>
              </div> 

               <div>
                <h3 className="qualification__title">Marketing Specialist</h3>
                <span className="qualification__subtitle">
                Internship<br/>
                KOTRA Toronto (Consulate General of The Republic of Korea - Commercial Section) - Toronto CA
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018-2019
                </div>
              </div> 
            </div>
          </div>
          <div
            className={
              toggleState === 3
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Vice President</h3>
                <span className="qualification__subtitle">
                SSC (SAIT Student Code) Club - CA<br/>
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">2nd Place of the NASA Hackathon</h3>
                <span className="qualification__subtitle">
                  Space Apps Challenge 2022 - The Canadian Space Agency(CSA) - CA
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Tech Mentor</h3>
                <span className="qualification__subtitle">Calgary Public Library - CA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
