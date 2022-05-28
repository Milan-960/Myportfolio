import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { BiLinkExternal } from "react-icons/all";

import ms from "./ModalProjectCard.module.scss";

import Modal from "../../../components/Modal/Modal";
import Button from "../../../components/UIElements/Button/Button";
import { useModal } from "../../../hooks/modalHook";
import { PROJECTS } from "../../../constants/projects";

import { LazyLoadImage } from "react-lazy-load-image-component";

const ModalProjectCard = () => {
  const { id } = useParams();
  const { image, title, links, technologies } = PROJECTS.find(
    (p) => id === p.id
  );
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {}, [toggleModal]);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className={ms.cardWrapper}>
        <LazyLoadImage
          alt="project-img"
          effect="blur"
          src={image.src}
          width="100%"
          wrapperClassName={ms.image}
          placeholderSrc={image.placeholderSrc}
        />

        <div className={ms.cardBody}>
          <h3 className={ms.title}>{title}</h3>

          <div className={ms.technologies}>
            {technologies.map((tech) => (
              <span>{tech}</span>
            ))}
          </div>
        </div>

        <div className={ms.cardFooter}>
          <Button
            style={{ width: "12rem" }}
            className="primary"
            href={links.site}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp; View project
          </Button>

          <Button
            style={{ width: "12rem" }}
            className="primary"
            href={links.repo}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp; Know more
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
