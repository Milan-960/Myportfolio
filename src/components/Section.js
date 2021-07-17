import React from "react";
import "./Section.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Form from "./Form";
import { Button } from "@material-ui/core";

function Section({
  title,
  description,
  backgroundImg,
  showIcon,
  linkedinLink,
  githubLink,
  instagramLink,
  twitterLink,
  showForm,
  aboutMe,
  showAboutMe,
  showButton,
  buttonLink,
  showLower,
  lowerText,
}) {
  return (
    <div
      className="section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="section-container">
        <div className="section-title">
          <h1>{title}</h1>
          <div className="section-description">
            <div>
              <p>{description}</p>
            </div>
            <div className="section-links">
              {showIcon && (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={linkedinLink}
                >
                  <LinkedInIcon
                    style={{ fontSize: "35px" }}
                    className="linkedIn"
                  />
                </a>
              )}
              {showIcon && (
                <a rel="noopener noreferrer"
                 target="_blank"
                  href={githubLink}
                >
                  <GitHubIcon 
                  style={{ fontSize: "35px" }} 
                  className="github" 
                  />
                </a>
              )}
              {showIcon && (
                <a rel="noopener noreferrer"
                 target="_blank"
                  href={twitterLink}
                >
                  <TwitterIcon 
                  style={{ fontSize: "35px" }} 
                  className="twitter" 
                  />
                </a>
              )}
              {showIcon && (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={instagramLink}
                >
                  <InstagramIcon
                    style={{ fontSize: "35px" }}
                    className="Instagram"
                  />
                </a>
              )}
              
            </div>
          </div>
          {showAboutMe && <div className="about-me">{aboutMe}</div>}
          {showButton && (
            <a rel="noopener noreferrer" target="_blank" href={buttonLink}>
              <Button variant="contained" className="resume-button">
                View My CV
              </Button>
            </a>
          )}
        </div>
        {showLower && <div className="section-lower">{lowerText}</div>}
      </div>
    </div>
  );
}

export default Section;
