import React, { useState } from "react";
import "./Search.css";
import styled from "@emotion/styled";
import BookCardGoogle from "./BookCardGoogle";

const Search = (props) => {
  const Divider = styled.hr`
    position: relative;
    background-color: #e3a230;
    margin-top: 1rem;
    width: 90%;
    height: 0.2rem;
    border-radius: 0px 21px;
    border-color: #e3a230;
  `;

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState();
  const [isSearched, setIsSearched] = useState(false);

  const updateMovieSearched = (e) => {
    setQuery([e.target.value]);
  };

  const searchInfo = async (e) => {
    e.preventDefault();

    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&filter=paid-ebooks&maxResults=40`,
      {
        method: "get",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json.items);
        setMovies(json.items);
        setIsSearched(true);
      });

    props.handleBookChange(true);
  };

  return (
    <div>
      <form onSubmit={searchInfo}>
        <input
          type="text"
          className="form-control"
          name="book"
          autoComplete="on"
          placeholder="Search books by Title or Author"
          value={query}
          onChange={updateMovieSearched}
        />
        <button className="button">Search</button>
      </form>
      {isSearched ? (
        <div className=" best-seller container">
          <Divider />
          <div className="title-container">
            <h1 className="text-white">Searching: {query}</h1>
            <Divider />
          </div>
          <div className="bast-seller container">
            <div className="principal-container">
              <div className="search">
                {movies.map((item) => (
                  <BookCardGoogle key={item.id} book={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
