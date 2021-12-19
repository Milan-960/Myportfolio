import React from "react";
import m from "./Information.module.scss";

const Information = () => {
  return (
    <div className={m.details}>
      <h1>Hire Me.</h1>
      <p>
        I am available for full time, part time and freelance work. <br />
        Connect with me via sending me a message.
      </p>
    </div>
  );
};

export default Information;
