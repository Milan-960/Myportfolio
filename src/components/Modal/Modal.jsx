import { ReactComponent as ModalCloseIcon } from "../../assets/modal-close.svg";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Backdrop from "../UIElements/Backdrop/Backdrop";

const Modal = ({ children, show, onClose }) => {
  const history = useHistory();

  const closeModal = (e) => {
    onClose();
    e.stopPropagation();
    history.goBack();
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="modal_container">
      {show && <Backdrop onClick={closeModal} />}

      <CSSTransition
        in={show}
        timeout={300}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <div className="modal_child">
          <div className="closeWrapper" onClick={closeModal}>
            <button className="closeButton">
              <ModalCloseIcon className="closeIcon" />
            </button>
          </div>

          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Modal;
