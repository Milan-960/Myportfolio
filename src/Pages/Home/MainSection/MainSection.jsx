import ms from "./MainSection.module.scss";
// import homeMainIcon from "../../../assets/home-main.svg";
import Typewriter from "../../../components/UIElements/Typewriter/Typewriter";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";

const MainSection = () => {
  const { t } = useTranslation();
  return (
    <section className={ms.content}>
      <div className={ms.header}>
        <h2 style={{ paddingBottom: 15 }} className={ms.title}>
          {t("title")} <span className={ms.wave}>👋🏼</span>
        </h2>

        <h1 className={ms.mainTitle}>
          {t("name")}
          <strong className={ms.mainName}> Milan Sachani</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              "Software Engineer",
              "Front-end Developer",
              "Continuously Learning",
            ]}
            wrapperClassName={ms.typewriterWrapper}
            cursorClassName={ms.typewriterCursor}
          />
        </div>
      </div>

      {/* <LazyLoadImage
      // alt="home-img"
      // effect="blur"
      // src={homeMainIcon}
      // wrapperClassName={ms.homeMainIcon}
      /> */}
      <div className={ms.homeMainIcon}>
        <a href="https://app.daily.dev/Milan960">
          <img
            align="right"
            src="https://api.daily.dev/devcards/c4f077510dac4feb951df9312724d6ab.png?r=19v"
            width="360"
            alt="Milan Sachani's Dev Card"
          />
        </a>
      </div>
    </section>
  );
};

export default MainSection;
