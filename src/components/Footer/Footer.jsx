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
    <div className="footer">
      <div className="footer_container">
        <div className="copyright">
          <section>
            <h3>Developed by Milan Sachani 💪</h3>
          </section>
        </div>

        <div className="copyright">
          <section>
            <h3>Copyright © {year} MS 😎</h3>
          </section>
        </div>

        <div className="footer_body">
          <ul className="socialIcons">
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
                href="skype:live:milan.sachani.ms_1"
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
