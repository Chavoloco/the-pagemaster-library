import React from "react";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal is-open">
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        <div className="description"></div>
      </div>
    </div>
  );
};

export default Modal;
