import React from "react";
import "./BookCard.css";

const BookCardGoogle = (book) => {
  return (
    //google api
    <div className="books text-white">
      <div className="image">
        <img src={book.book.volumeInfo.imageLinks.thumbnail} alt="books"></img>
      </div>
      <div className="title">
        <h3>{book.book.volumeInfo.title} </h3>
        <h3>({book.book.volumeInfo.authors[0]})</h3>
      </div>
    </div>
  );
};

export default BookCardGoogle;
