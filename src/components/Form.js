import React from "react";
import emailjs from "emailjs-com";
import "./Form.css";
import { Button } from "@material-ui/core";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_g98udmq",
      "template_gtzyf7b",
      e.target,
      "user_Svb5pgKvX7J029wvT9Jvs"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function Form() {
  return (
    <div class="login-box">
      <form className="contact-form" onSubmit={sendEmail}>
        <h2>Contact</h2>
        <div class="user-box">
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div class="user-box">
          <label>email</label>
          <input type="text" name="email" required="" />
        </div>
        <div class="user-box">
          <label>contact_number</label>
          <input type="contact_number" name="contact_number" required="" />
        </div>
        <div class="user-box">
          <label>message</label>
          <input type="message" name="message" required="" />
        </div>
        <button class="btn">SUBMIT</button>
      </form>
    </div>
  );
}

export default Form;
