import React, { useState } from "react";
import "./BookCard.css";
import Modal from "./Modal";

const BookCard = (book) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleOpenModal = () => {
    setIsSelected(true);
  };

  const handleCloseModal = () => {
    setIsSelected(false);
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
      {isSelected ? (
        <Modal handleCloseModal={handleCloseModal} book={book} />
      ) : null}
    </div>
  );
};

export default BookCard;
