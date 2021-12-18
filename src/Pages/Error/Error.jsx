import React from "react";
import { Link } from "react-router-dom";

import ms from "./Error.module.scss";

export default function Error() {
  return (
    <div className={ms.text}>
      <h1>😜 Error 404 | Page Not Found 😜</h1>
      <img
        className={ms.img}
        src="https://ak.picdn.net/shutterstock/videos/16486171/thumb/1.jpg"
        alt="404"
      />
      <Link to="/" className={ms.btn}>
        💪 Back to homepage 💪
      </Link>
    </div>
  );
}
