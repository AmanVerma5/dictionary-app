import React from "react";
import { Link } from "react-router-dom";


const NavBar=()=>{
    return(
        <nav>
            <div className="logo">Dictionary App</div>
            <div className="links">
                <Link to='/'>Home</Link >
                <Link to='/history'>History</Link >
            </div>
        </nav>
    )
}

export default NavBar;