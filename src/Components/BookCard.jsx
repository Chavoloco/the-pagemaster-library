import React from 'react'
import "./BookCard.css"

const BookCard = (book) => {

    return (
        //new yor times api
        <div className="books text-white">
        <div className="image">
            <img src={book.book.book_image} alt="books"></img>
        </div>
        <div className="title">
            <h3>{book.book.title}</h3>
            <h3>({book.book.author})</h3>
        </div>
        </div>
     );
}
 
export default BookCard;