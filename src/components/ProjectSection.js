import React from "react";
import Project from "./Project";
import "./ProjectSection.css";

function ProjectSection() {
  return (
    <div className="project-section">
      <Project
        projectLink={
          "https://expense-apps.netlify.app/"
        }
        projectImg={"/ss.png"}
        title={"Expenses-Tracker "}
        description={
          "An Application where you can add your expenses. After adding an expense there is a filter whitch counts your total expenses of the month. "
        }
        skillsUsed={["ReactJS","HTML,CSS,Javascript"]}
      />
      <Project
        projectLink={"https://tic-tac-toem.netlify.app/"}
        projectImg={"/tic.png"}
        title={"Tic-Tac-Toe-Game"}
        description={
          "A Game. where player can play with computer if He/She doesn't opponent!"
        }
        skillsUsed={["HTML,CSS,Javascript"]}
      />
      <Project
        projectLink={"https://github.com/Milan-960/Registration_Form"}
        projectImg={"/form.png"}
        title={"Registration_Form"}
        description={
          "created one form through php and mySqli.where user will register it self. A headache but done!"
        }
        skillsUsed={["HTML,CSS,Javascript", "PHP", "MySQL"]}
      />
      <Project
        projectLink={
          "https://github.com/Milan-960/Cosmetic-and-Beauty-Web-Application.git"
        }
        projectImg={"/admin.png"}
        title={"Cosmetic-and-Beauty-Web-Application"}
        description={
          "web Application for purchasing beauty care and cosmetics with the help of Android studio, in this application where people can buy all the products related to cosmetics."
        }
        skillsUsed={["Java", "PHP admin panel"]}
      />
    </div>
  );
}

export default ProjectSection;
