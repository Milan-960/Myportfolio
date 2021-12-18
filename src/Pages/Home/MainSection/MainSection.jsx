import s from "./MainSection.module.scss";
import homeMainIcon from "../../../assets/home-main.svg";
import Typewriter from "../../../components/UIElements/Typewriter/Typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Hola Amigo! <span className={s.wave}>👋🏼</span>
        </h2>

        <h1 className={s.mainTitle}>
          I am
          <strong className={s.mainName}> Milan Sachani</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={["Front-end Developer", "Continuously Learning 📚"]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
      />
    </section>
  );
};

export default MainSection;
