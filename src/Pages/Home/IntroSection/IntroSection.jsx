import ms from "./IntroSection.module.scss";

import { FaLinkedinIn, FaStackOverflow, FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import { LazyLoadImage } from "react-lazy-load-image-component";

const IntroSection = () => {
  return (
    <div>
      <section className={ms.content}>
        <div className={ms.introduction}>
          <div className={ms.introductionText}>
            <h1 className={ms.title}>
              LET ME <span className={ms.purple}> INTRODUCE </span> MYSELF
            </h1>

            <div className={ms.description}>
              <p>
                I fell in love with programming, and I believe...😎 At the very
                least, I've learned something. As a{" "}
                <b className={ms.purple}> Front-End Developer, </b> I work on a
                variety of projects. I enjoy researching new trends and learning
                about new technologies. Feel free to contact me if you need
                consulting, volunteer work, or just want to talk about something
                interesting.
              </p>
              <p>
                My areas of interest include the development of new
                <i>
                  <b className={ms.purple}> Web Technologies and Products</b>
                </i>
              </p>
              <p>
                A dedicated{" "}
                <b className={ms.purple}> Front-end Developer 🚀 </b>
                I've worked with{" "}
                <b className={ms.purple}>
                  {" "}
                  HTML5, CSS3/SCSS, JavaScript, Reactjs, Redux, Nodejs,
                </b>{" "}
                and a few other cool 😎 libraries to create{" "}
                <b className={ms.purple}>websites and mobile applications.</b>
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
        <div>
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
        </div>
      </section>
    </div>
  );
};

export default IntroSection;
