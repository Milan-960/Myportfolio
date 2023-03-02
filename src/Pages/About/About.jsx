import ms from "./About.module.scss";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
// import aboutPromoImg from "../../assets/about-promo.svg";
import AboutTextCard from "./AboutTextCard/AboutTextCard";
import TechSkills from "./TechSkills/TechSkills";
import GithubActivity from "./GithubActivity/GithubActivity";
import { LazyLoadImage } from "react-lazy-load-image-component";

import homeMainIcon from "../../assets/home-main.svg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <BaseLayout>
      <div className={ms.content}>
        <div className={ms.about}>
          <div className={ms.aboutDescription}>
            <h1 className={ms.title}>
              {t("aboutpage.title_first")}
              {""}
              <b className={ms.purple}> {t("aboutpage.title_second")}</b>
            </h1>
            <AboutTextCard />
          </div>

          <LazyLoadImage
            alt="home-img"
            effect="blur"
            src={homeMainIcon}
            wrapperClassName={ms.aboutImg}
          />
          {/* <div className={ms.aboutImg}>
            <img src={aboutPromoImg} alt="about" />
          </div> */}
        </div>

        <h2 className={ms.skills}>
          {t("aboutpage.professional.title")}{" "}
          <b className={ms.purple}>{t("aboutpage.professional.skills")}</b>
        </h2>
        <TechSkills />

        <h2 className={ms.githubActivity}>
          {t("aboutpage.days.title")}{" "}
          <b className={ms.purple}>{t("aboutpage.days.day")}</b>
        </h2>
        <GithubActivity />
      </div>
    </BaseLayout>
  );
};

export default About;
