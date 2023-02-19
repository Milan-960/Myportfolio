import { routes } from "../../routes/BaseRoutes";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME}>
        <svg
          fill="logoPrimary"
          xmlns="http://www.w3.org/2000/svg"
          width="110"
          viewBox="0 0 49 19"
        >
          <text transform="translate(1 15)" fill="#cd5ff8">
            <tspan>Ms.Dev</tspan>
          </text>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
