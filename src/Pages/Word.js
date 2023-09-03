import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar";
import { useParams } from "react-router-dom";
import Result from "../Component/Result";
import { useSelector } from "react-redux";

const Word=()=>{
    let id=useParams().id;
    console.log(id)
    let{loading,data,error,history}=useSelector(state=>state)
    console.log(history)
    let arr=history.filter((element)=>{
        console.log(element[0].word===id)
        return element[0].word===id
    })
     console.log(arr);

    // useEffect(()=>{
    //     axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${id}`)
    //         .then(response=>{
    //             data=response.data;
    //             //console.log(setData(data))
    //         })
    //         .catch(e=>console.log(e))
    // },[])
    return(
        <div>
            <NavBar />
            {
                arr && arr.length > 0 ? (
                    arr[0].map((item) => (
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