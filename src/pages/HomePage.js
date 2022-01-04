import React from "react";
import Section from "../components/Section";
import "./Homepage.css";
import Pdf from "../Document/Milan-CV.pdf";

function HomePage() {
  return (
    <div className="home">
      <Section
        backgroundImg={"/3417081.jpg"}
        title={"Milan Sachani"}
        description={"Junior Front-end Developer"}
        showIcon={true}
        linkedinLink={"https://www.linkedin.com/in/milan-sachani-9090"}
        githubLink={"https://github.com/Milan-960"}
        instagramLink={"https://www.instagram.com/milan_00269"}
        twitterLink={"https://twitter.com/MilanSachani"}
        showAboutMe={true}
        aboutMe={
          "I am working as a Junior front-end developer.I like to explore new trends and learn new technologies.Feel free to reach out to me for consulting, Volunteering or just for some interesting discussion."
        }
        showButton={true}
        buttonLink={<a href={Pdf}>CV</a>}
        showLower={false}
        lowerText={"Scroll through some of my projects below"}
      />
    </div>
  );
}

export default HomePage;
