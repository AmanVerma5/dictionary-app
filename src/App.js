import React from "react";
import './style.css';
import Home from "./Pages/Home";
import SearchHistory from "./Pages/SearchHistory";
import { BrowserRouter } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Word from "./Pages/Word";



const App=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/history' element={<SearchHistory/>}/>
            <Route path='/word/:id' element={<Word/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;