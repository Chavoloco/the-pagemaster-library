import React, { useState } from "react";

function Modal(props) {
  const book = props.book;
  const [show, setShow] = useState(true);
  const closeModal = () => {
    props.handleCloseModal(false);
    setShow(false);
  };
  return (
    <div hidden={!show} className="modal-container">
      <div className="modal-background">
        <div onClick={closeModal}>
          <button>X</button>{" "}
        </div>
        <div className="modal-card">
          <div className="modal-image">
            <img src={book.book.book_image} alt="book" />
          </div>
          <div className="modal-description">
            <div className="modal-title">
              <h2>{book.book.title}</h2>
            </div>
            <div className="modal-overview">
              <h4>Overview</h4>
              <h4>{book.book.description}</h4>
            </div>
            <div>
              <h4>Author</h4>
              <h4>{book.book.author}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
