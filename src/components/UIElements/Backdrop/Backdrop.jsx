import ms from "./Backdrop.module.scss";

const Backdrop = ({ onClick }) => {
  return <div className={ms.backdrop} onClick={onClick} />;
};

export default Backdrop;
