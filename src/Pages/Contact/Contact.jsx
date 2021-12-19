import React from "react";

import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

import Form from "./ContactForm/Form";
import GoogleMap from "./GoogleMap/Map";
import Information from "./Information/Information";

const Contact = () => {
  return (
    <div>
      <BaseLayout />
      <Form />
      <GoogleMap />
    </div>
  );
};
export default Contact;
