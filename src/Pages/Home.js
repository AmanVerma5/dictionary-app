import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import SearchBar from "../Component/SearchBar";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { postFetching,postFetchingFailure,postFetchingSuccess } from "../redux/action/ActionCreators";
import Result from "../Component/Result";


const Home=()=>{
    let [word,setWord]=useState('');
    const dispatch=useDispatch();
    const {loading,data,error}=useSelector((state)=>state)

    useEffect(
        ()=>{
            // console.log(word)
            dispatch(postFetching())
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response=>{
                dispatch(postFetchingSuccess(response.data))
                saveToLocalStorage(word);
                //console.log(response.data)
            })
            .catch(e=>dispatch(postFetchingFailure(e)))
        },[word]
    )

    const saveToLocalStorage = (searchTerm) => {
       
        if (localStorage) {
          const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || []; 
          if (!searchHistory.includes(searchTerm)){
          searchHistory.push(searchTerm);
          localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
          }
        }
      };
    //console.log(data[0].word)

    return(
        <div className="home-page">
            <NavBar />
            <SearchBar word={word} setWord={setWord}/>
            <div>
            {loading ? (
          <h1>Loading...</h1>
        ) : (
          data && data.length > 0 ? (
            data.map((item) => (
              <Result word={item.word} phonetic={item.phonetic} phonetics={item.phonetics} meanings={item.meanings}/>
            ))
          ) : (
            <p>No data available.</p>
          )
        )}
            </div>
        </div>
    )
}

export default Home;