import React, { useState } from "react";
import Modal from "./Modal";
import "./BookCard.css";

const BookCard = (book) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    //new yor times api
    <div className="books text-white" onClick={handleOpenModal}>
      <div className="image">
        <img src={book.book.book_image} alt="books"></img>
      </div>
      <div className="title">
        <h3>{book.book.title}</h3>
        <h3>({book.book.author})</h3>
      </div>
      {openModal ? <Modal closeModal={closeModal} /> : <div></div>}
    </div>
  );
};

export default BookCard;
