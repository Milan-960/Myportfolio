import React from "react";
import Project from "./Project";
import "./ProjectSection.css";

function ProjectSection() {
  return (
    <div className="project-section">
      <Project
        projectLink={"https://milanofood.netlify.app/"}
        projectImg={"/food.png"}
        title={"FoodApp"}
        description={
          "MilanosFood website will come soon I am working on this project."
        }
        skillsUsed={["ReactJS", "Firebase", "HTML,CSS,Javascript"]}
      />
      <Project
        projectLink={"https://moviesdata.netlify.app/"}
        projectImg={"/movieapp.png"}
        title={"Fetched Data movie app"}
        description={
          "In this app I have created a Movie App where you can add your movie list and can featch data from the database"
        }
        skillsUsed={["ReactJS", "API", "Firebase", "HTML,CSS,Javascript"]}
      />
      <Project
        projectLink={"https://goals-list.netlify.app/"}
        projectImg={"/todo.png"}
        title={"To-Do-Goal-List"}
        description={
          "I have created a LO-DO-LIST where you can enter and delete your goals for tommorow to stay fouced ♥ "
        }
        skillsUsed={["ReactJS", "HTML,CSS,Javascript"]}
      />
      <Project
        projectLink={"https://expense-apps.netlify.app/"}
        projectImg={"/ss.png"}
        title={"Expenses-Tracker "}
        description={
          "An Application where you can add your expenses. After adding an expense there is a filter whitch counts your total expenses of the month. "
        }
        skillsUsed={["ReactJS", "HTML,CSS,Javascript"]}
      />
        <Project
          projectLink={"https://gym-m.netlify.app/"}
          projectImg={"/gym.png"}
          title={"M-GYM"}
          description={
            "So far I am developing Gym website. I have created a login page where users can register themselves. After registering, you can access other pages to find out about offers on fitness blogs and gyms.This website has not been completed but is currently in the works."
          }
          skillsUsed={["ReactJS", "Firebase", "HTML,CSS,Javascript"]}
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
