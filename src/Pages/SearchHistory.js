import React from "react";
import NavBar from "../Component/NavBar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchHistory=()=>{
    const {loading,data,error,history}=useSelector(state=>state)
    console.log(history)
    return(
        <div >
            <NavBar />
            <h1 style={{marginLeft:"10px"}}>Search History</h1>
            <div className="search-history">
                {
                  history.map(element=>(
                    <Link to={{pathname:`/word/${element[0].word}`}} className="search-words">{element[0].word}</Link>
                
                   ))
                }
            </div>
        </div>
    )
}
export default SearchHistory