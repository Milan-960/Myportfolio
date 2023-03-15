import React, { useEffect, useState, useRef } from "react";
import { HeadProvider, Title, Link, Meta } from "react-head";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

import Form from "./ContactForm/Form";
import GoogleMap from "./GoogleMap/Map";
import Video from "./Video";

const Contact = () => {
  return (
    <>
      {/* This is for SEO meta tags */}
      <HeadProvider>
        <Title>Milan Sachani || Contact </Title>
        <Link rel="canonical" href="https://milansachani.dev/contact" />
        <Meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=no"
        />
        <Meta httpEquiv="cache-control" content="personal website" />

        <div>
          <BaseLayout>
            <div className="main">
              <Video />
              <Form />
              <GoogleMap />
            </div>
          </BaseLayout>
        </div>
      </HeadProvider>
    </>
  );
};
export default Contact;
