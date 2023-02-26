import { useEffect, useState, useRef } from "react";

import BaseLayout from "../../layouts/BaseLayout/BaseLayout";

import Form from "./ContactForm/Form";
import GoogleMap from "./GoogleMap/Map";

import BgVideo from "../../Video/Fire1.mp4";
import BgVideo2 from "../../Video/Space.mp4";

const Contact = () => {
  // This hooks is to play videos
  const [vidIndex, setVidIndex] = useState(0);

  const ref = useRef(null);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);

  return (
    <div>
      <BaseLayout>
        <div className="main">
          <video
            style={{ display: vidIndex === 1 ? "none" : "block" }}
            src={BgVideo}
            autoPlay
            muted
            onEnded={() => setVidIndex((idx) => idx + 1)}
            className="bg-vid"
          />
          <video
            style={{ display: vidIndex === 0 ? "none" : "block" }}
            src={BgVideo2}
            muted
            loop
            ref={ref}
            className="bg-vid"
          />
          <Form />
          <GoogleMap />
        </div>
      </BaseLayout>
    </div>
  );
};
export default Contact;
