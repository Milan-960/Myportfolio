import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as ModalCloseIcon } from "../../../assets/modal-close.svg";
import { FaLinkedin } from "react-icons/fa";

import "./Recommendations.scss";
import { recommendations } from "constants/recommendations";

// Truncate the text to a word limit
const truncateText = (text, wordLimit) => {
  const wordsArray = text.split(" ");
  if (wordsArray.length > wordLimit) {
    return wordsArray.slice(0, wordLimit).join(" ") + "...";
  }
  return text; // If the text is already less than the word limit, return the full text.
};

// Split the text into paragraphs
const formatTextWithParagraphs = (text) => {
  return text
    .split("\n\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
};

function CarouselItem({
  imgUrl,
  imgTitle,
  imgText,
  name,
  position,
  recoLinks,
  onReadMore,
}) {
  return (
    <div className="carousel-card">
      <img src={imgUrl} alt={imgTitle} />
      <div className="carousel-content">
        <h3>"{imgTitle}"</h3>
        <h4>{formatTextWithParagraphs(truncateText(imgText, 50))}</h4>

        <p>
          {name} - {position}
        </p>
        <a
          className="recoLinks"
          href={recoLinks}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <a className="readMore" onClick={onReadMore}>
        Read more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
}

function Recommendations() {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedItem(null);
      setIsClosing(false);
      document.body.classList.remove("overflow-hidden");
    }, 400); // Same duration as the closing animation (0.4s)
  };

  return (
    <div className={`carousel-container ${selectedItem ? "paused" : ""}`}>
      <h2 className="skills">
        {t("aboutpage.reco.title")}{" "}
        <b className="purple">{t("aboutpage.reco.received")}</b>
      </h2>

      <div className="carousel-track">
        {/* Display each recommendation twice for seamless infinite scroll */}
        {recommendations.map((item, index) => (
          <CarouselItem
            key={index}
            imgUrl={item.img}
            imgTitle={item.title}
            imgText={item.text}
            name={item.name}
            position={item.position}
            recoLinks={item.recoLinks}
            onReadMore={() => openModal(item)}
          />
        ))}
        {recommendations.map((item, index) => (
          <CarouselItem
            key={index + recommendations.length} // Ensure unique key for duplicated items
            imgUrl={item.img}
            imgTitle={item.title}
            imgText={item.text}
            name={item.name}
            position={item.position}
            recoLinks={item.recoLinks}
            onReadMore={() => openModal(item)}
          />
        ))}
      </div>

      {/* Modal Section */}
      {selectedItem && (
        <div className={`modal_fullscreen ${isClosing ? "closing" : ""}`}>
          <div className="modal_content">
            <button className="closeButton" onClick={closeModal}>
              <ModalCloseIcon className="closeIcon" />
            </button>
            <h3>"{selectedItem.title}"</h3>
            <h4>{formatTextWithParagraphs(selectedItem.text)}</h4>
            <p>
              {selectedItem.name} - {selectedItem.position}
            </p>
            <a
              className="recoLinks"
              href={selectedItem.recoLinks}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="recommendations_backdrop" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
}

export default Recommendations;
