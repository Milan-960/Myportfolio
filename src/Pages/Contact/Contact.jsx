import { useEffect, useState, useRef } from "react";

import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

import Form from "./ContactForm/Form";
import GoogleMap from "./GoogleMap/Map";
import Video from "./Video";

const Contact = () => {
  return (
    <div>
      <BaseLayout>
        <div className="main">
          <Video />
          <Form />
          <GoogleMap />
        </div>
      </BaseLayout>
    </div>
  );
};
export default Contact;
