import { FaRegHandPointRight } from "react-icons/fa";

const AboutTextCard = () => {
  return (
    <div className="aboutTextCard_card">
      <p>
        Hola Amigos, I am <span className="about_purple">Milan Sachani </span>
        from <span className="about_purple"> Warsaw, Poland 🇵🇱</span>
        <br />
        <br />I have done Bachelor of Science in Computer Engineering from
        <br />
        Vistula University Warsaw, Poland 🇵🇱
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className="aboutActivity">
          <FaRegHandPointRight /> Travelling ✈️
        </li>
        <li className="aboutActivity">
          <FaRegHandPointRight /> Reading 📚
        </li>
        <li className="aboutActivity">
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
