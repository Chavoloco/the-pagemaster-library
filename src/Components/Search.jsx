import React from 'react'
import './Search.css';


const Search = () => {
    
    return ( 
        <div>
            <form>
                <input type="text" className="form-control" name="book" autoComplete="on" placeholder="Serah books by Title or Author"></input>
                <button className="button">Search</button>
                
            </form>
        </div>
     );
}
 
export default Search;