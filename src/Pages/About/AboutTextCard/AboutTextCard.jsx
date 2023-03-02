import { FaRegHandPointRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AboutTextCard = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutTextCard_card">
      <p>
        Hola Amigos, I am <span className="about_purple">Milan Sachani </span>
        from <span className="about_purple"> Warsaw, Poland 🇵🇱</span>
        <br />
        <br /> {t("aboutpage.education.title")}
        <br />
        {t("aboutpage.education.university")} Warsaw, Poland 🇵🇱
        <br />
        <br />
        {t("aboutpage.education.activity")}
      </p>

      <ul>
        <li className="aboutActivity">
          <FaRegHandPointRight /> {t("aboutpage.aboutactivity.travelling")}
        </li>
        <li className="aboutActivity">
          <FaRegHandPointRight /> {t("aboutpage.aboutactivity.reading")}
        </li>
        <li className="aboutActivity">
          <FaRegHandPointRight /> {t("aboutpage.aboutactivity.exercise")}
        </li>
      </ul>

      <p
        style={{
          color: "#cd5ff8",
          textAlign: "center",
          marginTop: "1rem",
          fontWeight: "bold",
        }}
      >
        {t("aboutpage.qoute.qoutebymilan")}
        <br />
        "" Milan Sachani ""
      </p>
    </div>
  );
};

export default AboutTextCard;
