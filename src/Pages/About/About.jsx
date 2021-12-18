import ms from "./About.module.scss";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import aboutPromoImg from "../../assets/about-promo.svg";
import AboutTextCard from "./AboutTextCard/AboutTextCard";
import TechSkills from "./TechSkills/TechSkills";
import GithubActivity from "./GithubActivity/GithubActivity";

const About = () => {
  return (
    <BaseLayout>
      <div className={ms.content}>
        <div className={ms.about}>
          <div className={ms.aboutDescription}>
            <h1 className={ms.title}>
              Know Who <b className={ms.purple}>I AM 😎</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={ms.aboutImg}>
            <img src={aboutPromoImg} alt="about" />
          </div>
        </div>

        <h2 className={ms.skills}>
          Professional <b className={ms.purple}>Skills</b>
        </h2>
        <TechSkills />

        <h2 className={ms.githubActivity}>
          ❤️ Days I <b className={ms.purple}>Code ❤️</b>
        </h2>
        <GithubActivity />
      </div>
    </BaseLayout>
  );
};

export default About;
