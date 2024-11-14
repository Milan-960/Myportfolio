import React from "react";

import s from "./ProjectCard.module.scss";
import { Link, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProjectCard = ({ id, image, title, description }) => {
  const location = useLocation();
  // Replace spaces in the ID with dashes
  const formattedId = id.replace(/\s+/g, "-");

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <Link
          to={{
            pathname: `/project/${formattedId}`,
            state: {
              background: location,
            },
          }}
        >
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ minHeight: "10rem" }}
            placeholderSrc={image.placeholderSrc}
          />
        </Link>

        <div className={s.cardBody}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.description}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
