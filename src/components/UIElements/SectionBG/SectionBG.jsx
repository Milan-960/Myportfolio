import ms from "./SectionBG.module.scss";

const SectionBG = ({ children }) => {
  return <div className={ms.sectionBG}>{children}</div>;
};

export default SectionBG;
