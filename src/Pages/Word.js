import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Result from "../Component/Result";

const Word=()=>{
    let id=useParams().id;
    console.log(id)
    let [data,setData]=useState();
    useEffect(()=>{
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${id}`)
            .then(response=>{
                data=response.data;
                console.log(setData(data))
            })
            .catch(e=>console.log(e))
    },[])
    return(
        <div>
            <NavBar />
            {
                data && data.length > 0 ? (
                    data.map((item) => (
                      <Result word={item.word} phonetic={item.phonetic} phonetics={item.phonetics} meanings={item.meanings}/>
                    ))
                  ):(
                    <h1>Loading...</h1>
                  )

            }
        </div>
    )
}

export default Word;