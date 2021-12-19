import ms from "./AboutTextCard.module.scss";
import { FaRegHandPointRight } from "react-icons/fa";

const AboutTextCard = () => {
  return (
    <div className={ms.card}>
      <p style={{ textAlign: "justify" }}>
        Hola Amigos, I am <span className={ms.purple}>Milan Sachani </span>
        from <span className={ms.purple}> Warsaw, Poland 🇵🇱</span>
        <br />
        <br />I have done Bachelor of Science in Computer Engineering from
        <br />
        Vistula University Warsaw, Poland 🇵🇱
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={ms.aboutActivity}>
          <FaRegHandPointRight /> Travelling ✈️
        </li>
        <li className={ms.aboutActivity}>
          <FaRegHandPointRight /> Reading 📚
        </li>
        <li className={ms.aboutActivity}>
          <FaRegHandPointRight /> Exercise 🏋🏼
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
        "" Programming is like an ocean 🌊 which will never end every day there
        will be something new which we may don't know but we must have to learn
        🧑‍💻""
        <br />
        "" Milan Sachani ""
      </p>
    </div>
  );
};

export default AboutTextCard;
