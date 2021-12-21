import ms from "./IntroSection.module.scss";

import { FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import { LazyLoadImage } from "react-lazy-load-image-component";

const IntroSection = () => {
  return (
    <section className={ms.content}>
      <div className={ms.introduction}>
        <div className={ms.introductionText}>
          <h1 className={ms.title}>
            LET ME <span className={ms.purple}> INTRODUCE </span> MYSELF
          </h1>

          <div className={ms.description}>
            <p>
              I fell in love with programming and I think...🤷‍♂️ I have at least
              learnt something. I am working as a Junior front-end developer.I
              like to explore new trends and learn new technologies.Feel free to
              reach out to me for consulting, Volunteering or just for some
              interesting discussion.
            </p>
            <p>
              My field of Interest's are building new
              <i>
                <b className={ms.purple}> Web Technologies and Products</b>
              </i>
            </p>
            <p>
              A passionate <b className={ms.purple}> Front-end Developer 🚀 </b>
              I have an experience of building{" "}
              <b className={ms.purple}>Websites and Mobile</b> applications with
              <b className={ms.purple}>
                {" "}
                HTML5, CSS3/SCSS, JavaScript, Reactjs, Nodejs,
              </b>{" "}
              and some other cool 😎 libraries.
            </p>
          </div>
        </div>
        <div>
          <Tilt
            tiltMaxAngleX={35}
            tiltMaxAngleY={35}
            perspective={900}
            scale={1.05}
            transitionSpeed={2000}
            gyroscope={true}
          >
            <LazyLoadImage
              alt="avatar"
              effect="blur"
              src="https://i.pinimg.com/1200x/93/cb/a6/93cba608cbd38deb81023c9f0407d9ff.jpg"
            />
          </Tilt>
        </div>
      </div>

      <div className={ms.introSocial}>
        <h1>FIND ME ON TECHSITES 🕸</h1>
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
    </section>
  );
};

export default IntroSection;
