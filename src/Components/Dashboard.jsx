import React, { useState, useEffect } from 'react'
import Search from './Search';
import './Dashboard.css';
import styled from '@emotion/styled';
import BookCard from './BookCard';
import BookCardGoogle from './BookCardGoogle';
import './Carousel.css';

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
    const [bestSeller, setBestSeller] = useState([])
    const [categoryWeek, setCategoryWeek] = useState([])
    const [authorsWeek, setAuthorsWeek] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [isCategoryLoaded, setIsCategoryLoaded] = useState(false)
    const [isAuthorsLoaded, setIsAuthorsLoaded] = useState(false)

    useEffect(() => {
        if (!isLoaded) {
            queryNYTbooks()                
        }else if (!isCategoryLoaded) {
            queryGooglebooksCategory()                
        }else if (!isAuthorsLoaded) {
            queryGooglebooksAuthor()                
        }
    })

    
    
    const scrollRight = () =>{
        const row = document.querySelector('.carousel-container')
        row.scrollLeft += row.offsetWidth;
    }
    const scrollLeft = () =>{
        const row = document.querySelector('.carousel-container')
        row.scrollLeft -= row.offsetWidth;
    }

    const scrollRight1 = () =>{
        const row1 = document.querySelector('.carousel-container1')
        row1.scrollLeft += row1.offsetWidth;
    }
    const scrollLeft1 = () =>{
        const row1 = document.querySelector('.carousel-container1')
        row1.scrollLeft -= row1.offsetWidth;
    }

    const scrollRight2 = () =>{
        const row2 = document.querySelector('.carousel-container2')
        row2.scrollLeft += row2.offsetWidth;
    }
    const scrollLeft2 = () =>{
        const row2 = document.querySelector('.carousel-container2')
        row2.scrollLeft -= row2.offsetWidth;
    }

    // ..................-Best seller query
    const queryNYTbooks = async () => {
        let nytimesKey = 'ARS6Cr2X3a7H51DoNJmbJ6fLyV48k7fx';
        await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=' + nytimesKey, {
          method: 'get',
        })
        .then(response => { return response.json(); })
        .then( json => { 
            console.log(json.results.books);
            setBestSeller(json.results.books)
        })
        .catch(error => {
            console.log('NYT API Error: Defaulting to nytimes archival data.' + error);
            setTimeout(() => {
                setIsLoaded(false)
            }, 3000);
        });
        
        setIsLoaded(true)
    }

    // ..................Category of the week query
    const queryGooglebooksCategory = async () => {
        console.log("Hola");
        await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&maxResults=20', {
          method: 'get',
        })
        .then(response => { return response.json(); })
        .then(json => { 
            console.log(json.items);
            setCategoryWeek(json.items);
        })
        .catch(error => {
            console.log(error);
            setTimeout(() => {
                setIsCategoryLoaded(false)
            }, 3000);
        });        
        setIsCategoryLoaded(true)
    }
    
    const queryGooglebooksAuthor = async () => {
        //Philip Roth
        await fetch('https://www.googleapis.com/books/v1/volumes?q=inauthor:Philip+Roth&filter=paid-ebooks&maxResults=20', {
          method: 'get',
        })
        .then(response => { return response.json(); })
        .then(json => { 
            console.log(json.items);
            setAuthorsWeek(json.items);
        })
        .catch(error => {
            console.log(error);
            setTimeout(() => {
                setIsAuthorsLoaded(false)
            }, 3000);
        });        
        setIsAuthorsLoaded(true)
    }

    return ( 

        <div>
            <Search />
            <Divider />
            <div>
                <div className=" best-seller container" >
                    <div className="title-container">
                        <h1 className="text-white">Best Seller</h1>
                        <Divider />
                    </div>
                    <div class="bast-seller container">
                        <div className="principal-container">
                            <button  id="left-arrow" className="left-arrow" onClick={scrollLeft}>«</button>
                            <div className="carousel-container">
                                <div className="carousel">
                                    {bestSeller.map(item => <BookCard key={item.id} book={item}/>)}
                                </div>
                            </div>
                            <button  id="right-arrow" className="right-arrow" onClick={scrollRight}>»</button>
                        </div>
                    </div>
                </div>

                <Divider />
                <div>
                    <div className=" best-seller container" >
                        <div className="title-container">
                            <h1 className="text-white">Category of the week: fiction </h1>
                            <Divider />
                        </div> 
                        <div class="bast-seller container">
                            <div className="principal-container">
                                <button  id="left-arrow" className="left-arrow" onClick={scrollLeft1}>«</button>
                                <div className="carousel-container1">
                                    <div className="carousel">
                                        {categoryWeek.map(item => <BookCardGoogle key={item.id} book={item}/>)}  
                                    </div>
                                </div>
                                <button  id="right-arrow" className="right-arrow" onClick={scrollRight1}>»</button>
                            </div>
                        </div>
                    </div>

                </div>
                <Divider />
                <div>
                    <div className=" best-seller container" >
                        <div className="title-container">
                            <h1 className="text-white">Meeting an author: Philip Roth </h1>
                            <Divider />
                        </div> 
                        <div class="bast-seller container">
                            <div className="principal-container">
                                <button  id="left-arrow" className="left-arrow" onClick={scrollLeft2}>«</button>
                                <div className="carousel-container2">
                                    <div className="carousel">
                                        {authorsWeek.map(item => <BookCardGoogle key={item.id} book={item}/>)}
                                    </div>
                                </div>
                                <button  id="right-arrow" className="right-arrow" onClick={scrollRight2}>»</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>     
        </div>

     );
}
 
export default Dashboard;