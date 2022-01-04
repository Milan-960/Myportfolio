import React from "react";
import "./Contact.css";
import Form from "../components/Form";

function Contact() {
  return (
    <div className="contact" style={{ backgroundImage: `url(/3417082.jpg)` }}>
      <div className="contact-page-container">
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
