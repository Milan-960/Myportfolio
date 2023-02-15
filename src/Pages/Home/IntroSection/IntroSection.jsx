import ms from "./IntroSection.module.scss";

import { FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import { LazyLoadImage } from "react-lazy-load-image-component";
import milanimg from "../../../assets/milan.jpeg";
import { useTranslation } from "react-i18next";

const IntroSection = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className={ms.content}>
        <div className={ms.introduction}>
          <div className={ms.introductionText}>
            <h1 className={ms.title}>
              {t("intro.letme")}
              <span className={ms.purple}> {t("intro.introd")} </span>
              {t("intro.myself")}
            </h1>
            <div className={ms.description}>
              <p>
                {t("description.info")}
                <b className={ms.purple}> {t("description.enginner")} </b>
                {""}
                {t("description.work")}
              </p>
              <p>
                {t("description.area.web")}
                <i>
                  <b className={ms.purple}> {t("description.area.product")} </b>
                </i>
                {t("description.area.business")}
              </p>
              <p>
                {t("description.experience.title")}
                <b className={ms.purple}> {t("description.enginner")} 🚀 </b>
                {t("description.experience.work")}
                <b className={ms.purple}>
                  {" "}
                  JavaScript, TypeScript, Redux, Nodejs,
                </b>{" "}
                {t("description.experience.tools")}
                <b className={ms.purple}> {t("description.experience.area")}</b>
              </p>
            </div>
          </div>
          <div>
            <Tilt
              tiltMaxAngleX={9}
              tiltMaxAngleY={9}
              perspective={1000}
              scale={1.05}
              transitionSpeed={2500}
              gyroscope={true}
            >
              <LazyLoadImage alt="avatar" effect="blur" src={milanimg} />
            </Tilt>
          </div>
        </div>

        <div className={ms.introSocial}>
          <h1> {t("description.find")}</h1>
          <p>
            Feel free to <span className={ms.purple}>connect </span>with me
          </p>
          <ul className={ms.milan}>
            <li>
              <a
                href="https://github.com/milan-960"
                target="_blank"
                rel="noreferrer"
                className={ms.socialIcon}
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/milan-sachani-9090"
                target="_blank"
                rel="noreferrer"
                className={ms.socialIcon}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/17144934/milan960"
                target="_blank"
                rel="noreferrer"
                className={ms.socialIcon}
              >
                <FaStackOverflow />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/MilanSachani"
                target="_blank"
                rel="noreferrer"
                className={ms.socialIcon}
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        {/* <div>
          <table className={ms.counter}>
            <tr>
              <td>You are visitor</td>
              <td>
                <img
                  src="https://profile-counter.glitch.me/milansachani.dev/count.svg"
                  alt=""
                />
              </td>
            </tr>
          </table>
        </div> */}
      </section>
    </div>
  );
};

export default IntroSection;
