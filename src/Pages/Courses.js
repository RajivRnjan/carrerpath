import React from "react";
import { Link } from "react-router-dom";
import { PiStarFour } from "react-icons/pi";

function Courses() {
  return (
    <>
      <div id="Container">
        <div className="Courses">
          <div className="Heading">
            <h2>Choose the Course</h2>
          </div>

          <div className="CourseCardContainer">
            <div className="CourseCard">
              <h3>Resources for</h3>
              <h4>Benefits : </h4>
              <ul>
                <li>
                  <PiStarFour className="star-icon" />
                  Learn for Free
                </li>
                <li>
                  <PiStarFour className="star-icon" />
                  Essential Content
                </li>
                <li>
                  <PiStarFour className="star-icon" />
                  Unlimited Access to content
                </li>
                <li>
                  <PiStarFour className="star-icon" />
                  Will learn something new
                </li>
                <li>
                  <PiStarFour className="star-icon" />
                  Basic Certificates
                </li>
              </ul>
              <Link to="">
                {" "}
                <button>Get Started</button>
              </Link>

              <div className="Icons">
                <span>
                  <img src="/Images/Icons/youtube.svg" alt="icon-img"></img>
                </span>
                <span>
                  <img src="/Images/Icons/google.svg" alt="icon-img"></img>
                </span>
                <span>
                  <img src="/Images/Icons/microsoft.svg" alt="icon-img"></img>
                </span>
              </div>
            </div>

            
            <div className="CourseCard">
              <h3>Resources for</h3>
              <h4>Benefits : </h4>
              <ul>
                <li>
                  <PiStarFour className="star-icon" />
                  Unlock Premium Content
                </li>
                <li>
                  <PiStarFour className="star-icon" />
                  Expert Instructors
                </li>
                <li>
                  <PiStarFour className="star-icon" />
                  Interactive Assignments
                </li>
                <li>
                  <PiStarFour className="star-icon" />
                  Personalized Feedback
                </li>
                <li>
                  <PiStarFour className="star-icon" />
                  Dedicated Support
                </li>
              </ul>
              <Link to="">
                {" "}
                <button>Get Started</button>
              </Link>

              <div className="Icons">
              <span>
                  <img src="/Images/Icons/google.svg" alt="icon-img"></img>
                </span>
                <span>
                  <img src="/Images/Icons/microsoft.svg" alt="icon-img"></img>
                </span>
                <span>
                  <img src="/Images/Icons/linkedin.svg" alt="icon-img"></img>
                </span>
                <span>
                  <img src="/Images/Icons/udemy.svg" alt="icon-img"></img>
                </span>
                
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
