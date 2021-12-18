import s from "./AboutTextCard.module.scss";
import { ImPointRight } from "react-icons/im";

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: "justify" }}>
        Hola Amigos, I am <span className={s.purple}>Milan Sachani </span>
        from <span className={s.purple}> Warsaw, Poland.</span>
        <br />
        <br />I have done Bachelor of Science in Computer Engineering from
        <br />
        Vistula University Warsaw, Poland.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>

      <p
        style={{
          color: "rgb(155 126 172)",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        "Strive to build things that make a difference!"{" "}
      </p>
    </div>
  );
};

export default AboutTextCard;
