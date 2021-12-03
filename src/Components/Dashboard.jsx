import React, { useState, useEffect } from "react";
import Search from "./Search";
import "./Dashboard.css";
import styled from "@emotion/styled";
import BookCard from "./BookCard";
import Modal from "./Modal";
import BookCardGoogle from "./BookCardGoogle";
import "./Carousel.css";

const Dashboard = () => {
  const Divider = styled.hr`
    position: relative;
    background-color: #e3a230;
    margin-top: 1rem;
    width: 90%;
    height: 0.2rem;
    border-radius: 0px 21px;
    border-color: #e3a230;
  `;
  const [bestSeller, setBestSeller] = useState([]);
  const [categoryWeek, setCategoryWeek] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [authorsWeek, setAuthorsWeek] = useState([]);
  const [categoryNameLoaded, setCategoryNameLoaded] = useState(false);
  const [authorsWeekName, setAuthorsWeekName] = useState();
  const [authorNameLoaded, setAuthorNameLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCategoryLoaded, setIsCategoryLoaded] = useState(false);
  const [isAuthorsLoaded, setIsAuthorsLoaded] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    if (!isLoaded) {
      queryNYTbooks();
    } else if (!isCategoryLoaded) {
      queryGooglebooksCategory();
      handleRandomCategory();
    } else if (!isAuthorsLoaded) {
      queryGooglebooksAuthor();
      handleRandomAuthor();
    }
  });

  let handleRandomAuthor = (e) => {
    if (!authorNameLoaded) {
      const athorsWeekList = [
        "Albert Espinosa",
        "Sara Mesa",
        "Elísabet Benavent",
        "Eloy Moreno",
        "Jorge Bucay",
        "Mercedes Ron",
        "Philip Roth",
        "Florencia Bonelli",
        "Manuel Puig",
        "Adolfo Bioy Casares",
        "Fernando Aramburu",
        "María Dueñas",
        "María Oruña",
        "Megan Maxwell",
        "Eva García Sáenz de Urturi",
        "Lorenzo Silva",
      ];
      const randomNumber = Math.floor(Math.random() * 16);
      console.log(randomNumber);
      setAuthorsWeekName(athorsWeekList[randomNumber]);
      setAuthorNameLoaded(true);
    }
  };

  let handleRandomCategory = (e) => {
    if (!categoryNameLoaded) {
      const categoryList = [
        "Antiques ",
        "Architecture",
        "Art",
        "Bibles",
        "Biography",
        "Body",
        "Business",
        "Comics",
        "COMPUTERS",
        "COOKING",
        "CRAFTS",
        "DESIGN",
        "DRAMA",
        "EDUCATION",
        "FAMILY",
        "FICTION",
        "GAMES",
        "HEALTH",
        "HISTORY",
        "HOUSE",
        "HUMOR",
        "JUVENILE",
        "YOUNG ADULT",
        "TRUE CRIME",
        "TRAVEL",
        "SELF-HELP",
        "POETRY",
        "PHOTOGRAPHY",
        "PETS",
        "NATURE",
        "MUSIC",
      ];

      const randomNumber = Math.floor(Math.random() * 33);
      console.log(randomNumber);
      const category = categoryList[randomNumber].toLowerCase();
      setCategoryName(category);
      setCategoryNameLoaded(true);
    }
  };

  const scrollRight = () => {
    const row = document.querySelector(".carousel-container");
    row.scrollLeft += row.offsetWidth;
  };
  const scrollLeft = () => {
    const row = document.querySelector(".carousel-container");
    row.scrollLeft -= row.offsetWidth;
  };

  const scrollRight1 = () => {
    const row1 = document.querySelector(".carousel-container1");
    row1.scrollLeft += row1.offsetWidth;
  };
  const scrollLeft1 = () => {
    const row1 = document.querySelector(".carousel-container1");
    row1.scrollLeft -= row1.offsetWidth;
  };

  const scrollRight2 = () => {
    const row2 = document.querySelector(".carousel-container2");
    row2.scrollLeft += row2.offsetWidth;
  };
  const scrollLeft2 = () => {
    const row2 = document.querySelector(".carousel-container2");
    row2.scrollLeft -= row2.offsetWidth;
  };

  // ..................-Best seller query
  const queryNYTbooks = async () => {
    let nytimesKey = "ARS6Cr2X3a7H51DoNJmbJ6fLyV48k7fx";
    await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" +
        nytimesKey,
      {
        method: "get",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setBestSeller(json.results.books);
      })
      .catch((error) => {
        console.log(
          "NYT API Error: Defaulting to nytimes archival data." + error
        );
        setTimeout(() => {
          setIsLoaded(false);
        }, 3000);
      });

    setIsLoaded(true);
  };

  // ..................Category of the week query
  const queryGooglebooksCategory = async () => {
    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${categoryName}&filter=paid-ebooks&maxResults=20`,
      {
        method: "get",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setCategoryWeek(json.items);
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
          setIsCategoryLoaded(false);
        }, 3000);
      });
    setIsCategoryLoaded(true);
  };

  //..................Author of the week query
  const queryGooglebooksAuthor = async () => {
    //Philip Roth

    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorsWeekName}&filter=paid-ebooks&maxResults=20`,
      {
        method: "get",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAuthorsWeek(json.items);
      })
      .catch((error) => {
        console.log(error);
        setTimeout(() => {
          setIsAuthorsLoaded(false);
        }, 3000);
      });
    setIsAuthorsLoaded(true);
  };

  const handleBookChange = () => {
    setIsSearched(true);
  };

  let anotherStyle = "best-seller container";
  if (isSearched) {
    anotherStyle = "best-seller-deactive";
  }

  return (
    <div>
      <Search handleBookChange={handleBookChange} />
      <div className={anotherStyle}>
        <Divider />
      </div>
      <div>
        <div className={anotherStyle}>
          <div className="title-container">
            <h1 className="text-white">Best Seller</h1>
            <Divider />
          </div>
          <div className="best-seller container">
            <div className="principal-container">
              <button
                id="left-arrow"
                className="left-arrow"
                onClick={scrollLeft}
              >
                «
              </button>
              <div className="carousel-container">
                <div className="carousel">
                  {bestSeller.map((item) => (
                    <BookCard key={item.id} book={item} />
                  ))}
                </div>
              </div>
              <button
                id="right-arrow"
                className="right-arrow"
                onClick={scrollRight}
              >
                »
              </button>
            </div>
          </div>
        </div>
        <div className={anotherStyle}>
          <Divider />
        </div>
        <div>
          <div className={anotherStyle}>
            <div className="title-container">
              <h1 className="text-white">
                Category of the week: {categoryName}
              </h1>
              <Divider />
            </div>
            <div class="best-seller container">
              <div className="principal-container">
                <button
                  id="left-arrow"
                  className="left-arrow"
                  onClick={scrollLeft1}
                >
                  «
                </button>
                <div className="carousel-container1">
                  <div className="carousel">
                    {categoryWeek.map((item) => (
                      <BookCardGoogle key={item.id} book={item} />
                    ))}
                  </div>
                </div>
                <button
                  id="right-arrow"
                  className="right-arrow"
                  onClick={scrollRight1}
                >
                  »
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={anotherStyle}>
          <Divider />
        </div>
        <div>
          <div className={anotherStyle}>
            <div className="title-container">
              <h1 className="text-white">
                Meeting an author: {authorsWeekName}
              </h1>
              <Divider />
            </div>
            <div class="best-seller container">
              <div className="principal-container">
                <button
                  id="left-arrow"
                  className="left-arrow"
                  onClick={scrollLeft2}
                >
                  «
                </button>
                <div className="carousel-container2">
                  <div className="carousel">
                    {authorsWeek.map((item) => (
                      <BookCardGoogle key={item.id} book={item} />
                    ))}
                  </div>
                </div>
                <button
                  id="right-arrow"
                  className="right-arrow"
                  onClick={scrollRight2}
                >
                  »
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>{selectedBook && <Modal movie={selectedBook} />}</div>
      </div>
    </div>
  );
};

export default Dashboard;
