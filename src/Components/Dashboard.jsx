import React, {useState, useEffect} from 'react'
import Search from './Search';
import './Dashboard.css';
import styled from '@emotion/styled';
import BookCard from './BookCard';
import axios from 'axios';


const Dashboard = () => {

    const Divider = styled.hr`
    position: relative;
    background-color: #E3A230;
    margin-top: 1rem;
    width: 90%;
    height: .2rem;
    border-radius: 0px 21px; 
    border-color: #E3A230;
`
    const [ISBN, setISBN] = useState([])
    const [bestSeller, setBestSeller] = useState([])

    const queryBestSellerBooks = async () => {
        const nytApiKey= 'ARS6Cr2X3a7H51DoNJmbJ6fLyV48k7fx'
        const NYTUrl = `https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=${nytApiKey}`
        const BSBooks = await axios(NYTUrl)
        setISBN(BSBooks.data.results)

        if (ISBN.length != 0) {
            console.log(ISBN);
            queryGoogleBestSellerBooks()
        }

       
    }

    const queryGoogleBestSellerBooks = async () => {
        const booksUrl = `https://books.googleapis.com/books/v1/volumes?q=`
        // const books = ISBN.map((item)  => {
        //     const getBooks = axios(booksUrl+item.isbns[0].isbn10)
        //     console.log(getBooks)
        // })

        const arr = await ISBN.map(element => element.isbns[0].isbn10);

        for (let i = 0; i < arr.length; i++) {
            const element = await axios(booksUrl+arr[i]+"&filter=paid-ebooks&maxResults=15")
            await setBestSeller(element)
        }
        console.log(bestSeller);
        // const getBooks =  axios(booksUrl+element.isbns[0].isbn10)
        // console.log(getBooks);
        
        // console.log(books);  
    }
   
        //const nytBestSellersUrl= 'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key='
        //const nytApiKey= 'ARS6Cr2X3a7H51DoNJmbJ6fLyV48k7fx'
        // const booksUrl = `https://books.googleapis.com/books/v1/volumes?q=best%20seller&filter=paid-ebooks&maxAllowedMaturityRating=MAX_ALLOWED_MATURITY_RATING_UNDEFINED&maxResults=25&orderBy=relevance&printType=BOOKS&projection=FULL&showPreorders=true`
        //const booksUrl = `https://books.googleapis.com/books/v1/volumes?q=${element.isbns[0].isbn10}&maxResults=15`


    return ( 

        <div>
            <Search />
            <Divider />
            <div className=" best-seller container">
                <div className="title-container">
                    <h1 className="text-white">Best Seller</h1>
                    <Divider />
                </div>
                <div className="principal-container">
                    <button role="button" id="left-arrow" className="button-left">
                        «
                        {/* <FontAwesomeIcon icon="fa-solid fa-angle-left" /> */}
                    </button>
                    <div className="caroussel-container">
                        <div className="caroussel">
                                {bestSeller.length !== 0 
                                    ?
                                    <div className="book-card ">
                                        {bestSeller.data.items.map(item => <BookCard key={item.id} book={item} />)}
                                    </div>
                                :
                                <div> Cargando...</div> }
                        </div>
                    </div>
                    <button role="button" id="rigth-arrow" className="button-right" onClick={queryBestSellerBooks}>
                        »
                        {/* <FontAwesomeIcon icon="fa-solid fa-angle-right" /> */}
                    </button>
                </div>
            </div>
        </div>

     );
}
 
export default Dashboard;