import React, { useState } from "react";

const SearchBar=({setWord})=>{
    let [input,setInput]=useState("");
    return(
        <div className="search-bar">
            <input type="text" placeholder="Enter a word!" onChange={e=>setInput(e.target.value)}/>
            <button onClick={()=>setWord(input)}>Search</button>
        </div>
    )
}

export default SearchBar;