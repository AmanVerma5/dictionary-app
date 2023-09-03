import React from "react";



const Result=({word,phonetic,phonetics,meanings})=>{
    // console.log(phonetic)
    // console.log(phonetics)
    // console.log(meanings)
    
    return(
        <div className="result">
            <h2>{word}</h2>
            <p>{phonetic}</p>
            {
                phonetics.map((element,index)=>(
                    <div key={index}>
                        <audio src={element.audio} controls type="ogg"/>
                        <p>{element.text}</p>
                    </div>
                ))
            }
            {
                meanings.map(element=>(
                    <div>
                        <h2>{element.partOfSpeech}</h2>
                        {
                            element.definitions.map(element=>(
                                
                                <p>{element.definition}</p>
                            ))
                        }
                    </div>
                ))

            }
        </div>
    )

}

export default Result;