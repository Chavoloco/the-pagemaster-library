import React from 'react'
import './Search.css';
import styled from '@emotion/styled'

const Search = () => {

const Divider = styled.hr`
    position: relative;
    background-color: #E3A230;
    margin-top: 1rem;
    width: 90%;
    height: .2rem;
    border-radius: 0px 21px; 
    border-color: #E3A230;
`
    return ( 
        <div>
            <form>
                <input type="text" className="form-control" name="book" autoComplete="on" placeholder="Serah books by Title or Author"></input>
                <button className="button">Search</button>
                <Divider />
            </form>
        </div>
     );
}
 
export default Search;