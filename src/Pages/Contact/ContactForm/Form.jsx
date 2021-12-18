import React from "react";

import m from "./Contact.module.scss";

import emailjs from "emailjs-com";

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

class DemoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      emailjs
        .sendForm(
          "service_g98udmq",
          "template_gtzyf7b",
          event.target,
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
      event.target.reset();

      let input = {};
      input["name"] = "";
      input["email"] = "";
      input["phone"] = "";
      input["comment"] = "";
      this.setState({ input: input });

      alert("😎 Thank you for your message 😎");
    }
  }
  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter your name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["phone"]) {
      isValid = false;
      errors["phone"] = "Please enter a 9 digit valid phone number.";
    }

    if (typeof input["phone"] !== "undefined") {
      var patterns = new RegExp(/^[0-9\b]+$/);
      if (!patterns.test(input["phone"])) {
        isValid = false;
        errors["phone"] = "Please enter only number.";
      } else if (input["phone"].length !== 9) {
        isValid = false;
        errors["phone"] = "Please enter a 9 digit valid phone number.";
      }
    }

    if (!input["comment"]) {
      isValid = false;
      errors["comment"] = "Please enter your Message.";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <div className={m.loginbox}>
        <form className={m.contactform} onSubmit={this.handleSubmit}>
          <h2>Contact </h2>
          <div className={m.userbox}>
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.input.name}
              onChange={this.handleChange}
              placeholder="Enter name"
              id="name"
            />

            <div className={m.text_danger}>{this.state.errors.name}</div>
          </div>

          <div className={m.userbox}>
            <label for="email">Email Address:</label>
            <input
              type="text"
              name="email"
              value={this.state.input.email}
              onChange={this.handleChange}
              placeholder="Enter email"
              id="email"
            />

            <div className={m.text_danger}>{this.state.errors.email}</div>
          </div>

          <div className={m.userbox}>
            <label for="Phone">Phone:</label>
            <input
              type="number"
              name="phone"
              value={this.state.input.phone}
              onChange={this.handleChange}
              placeholder="+48 Enter phone"
              id="email"
            />

            <div className={m.text_danger}>{this.state.errors.phone}</div>
          </div>

          <div className={m.userbox}>
            <label for="comment">Message:</label>
            <input
              name="comment"
              value={this.state.input.comment}
              onChange={this.handleChange}
              placeholder="Enter Your Message"
            />

            <div className={m.text_danger}>{this.state.errors.comment}</div>
          </div>

          <button>
            <input
              type="submit"
              value="Submit"
              onSubmit={sendEmail}
              className={m.btn}
            />
          </button>
        </form>
      </div>
    );
  }
}

export default DemoForm;
