import ms from "./Footer.module.scss";
import { AiFillGithub } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaTelegramPlane,
  FaSkype,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={ms.footer}>
      <div className={ms.container}>
        <div className={ms.copyright}>
          <h3>Developed by Milan Sachani 💪</h3>
        </div>

        <div className={ms.copyright}>
          <h3>Copyright © {year} MS 😎</h3>
        </div>

        <div className={ms.body}>
          <ul className={ms.socialIcons}>
            <li>
              <a
                href="https://github.com/milan-960"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/milan-sachani-9090"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/17144934/milan960"
                target="_blank"
                rel="noreferrer"
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
            <li>
              <a
                href="https://t.me/milanschani"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>

            <li>
              <a
                href="skype:live:.cid.ef3cf8e97343e877?chat"
                target="_blank"
                rel="noreferrer"
              >
                <FaSkype />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
