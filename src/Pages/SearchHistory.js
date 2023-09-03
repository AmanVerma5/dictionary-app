import React from "react";
import NavBar from "../Component/NavBar";
import { Link } from "react-router-dom";

const SearchHistory=()=>{
    return(
        <div >
            <NavBar />
            <h1 style={{marginLeft:"10px"}}>Search History</h1>
            <div className="search-history">
                {
                   JSON.parse(localStorage.getItem('searchHistory')).map(element=>(
                    <Link to={{pathname:`/word/${element}`}} className="search-words">{element}</Link>
                
                   ))
                }
            </div>
        </div>
    )
}
export default SearchHistory