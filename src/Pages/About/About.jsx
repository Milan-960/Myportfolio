import * as React from "react";
import { HeadProvider, Title, Link, Meta } from "react-head";
import ms from "./About.module.scss";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
// import aboutPromoImg from "../../assets/about-promo.svg";
import AboutTextCard from "./AboutTextCard/AboutTextCard";
import TechSkills from "./TechSkills/TechSkills";
import GithubActivity from "./GithubActivity/GithubActivity";
import { LazyLoadImage } from "react-lazy-load-image-component";

import homeMainIcon from "../../assets/home-main.svg";
import { useTranslation } from "react-i18next";

import Fade from "react-reveal/Fade";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* This is for SEO meta tags */}
      <HeadProvider>
        <Title>About Milan Sachani || Skills </Title>
        <Link rel="canonical" href="https://milansachani.dev/about" />
        <Meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no"
        />
        <Meta httpEquiv="cache-control" content="personal website" />

        <BaseLayout>
          <div className={ms.content}>
            <div className={ms.about}>
              <div className={ms.aboutDescription}>
                <Fade left>
                  <h1 className={ms.title}>
                    {t("aboutpage.title_first")}
                    {""}
                    <b className={ms.purple}> {t("aboutpage.title_second")}</b>
                  </h1>
                  <AboutTextCard />
                </Fade>
              </div>
              <Fade right>
                <LazyLoadImage
                  alt="home-img"
                  effect="blur"
                  src={homeMainIcon}
                  wrapperClassName={ms.aboutImg}
                />
              </Fade>

              {/* <div className={ms.aboutImg}>
            <img src={aboutPromoImg} alt="about" />
          </div> */}
            </div>
            <Fade top>
              <h2 className={ms.skills}>
                {t("aboutpage.professional.title")}{" "}
                <b className={ms.purple}>
                  {t("aboutpage.professional.skills")}
                </b>
              </h2>
            </Fade>

            <TechSkills />

            <h2 className={ms.githubActivity}>
              {t("aboutpage.days.title")}{" "}
              <b className={ms.purple}>{t("aboutpage.days.day")}</b>
            </h2>
            <GithubActivity />
          </div>
        </BaseLayout>
      </HeadProvider>
    </>
  );
};

export default About;
