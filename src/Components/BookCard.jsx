import React from 'react'
import "./BookCard.css"

const BookCard = ({book}) => {
    // const price = book.saleInfo.listPrice
    return ( 
        <div className="card-body text-white" >
            <div className="imagen">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="book's image"></img>
            </div>
            <h3>{book.volumeInfo.title}</h3>
            {/* <h3>${book.saleInfo.listPrice.amount}</h3> */}
        </div>
     );
}
 
export default BookCard;