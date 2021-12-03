import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const handleCloseModal = () => {
    props.closeModal(false);
  };
  return (
    <div className="modal is-open">
      <div className="modal-container">
        <button className="modal-close" onClick={handleCloseModal}>
          X
        </button>
        <div className="description">"Hi it's an description"</div>
      </div>
    </div>
  );
};

export default Modal;
