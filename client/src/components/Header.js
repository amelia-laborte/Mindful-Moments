import React from "react";
import { NavLink } from "react-router-dom";

const Header = () =>{
    return (
        <div>
            <h1 class="display-1" >Mindful Moments</h1>
            <NavLink to="/">Home</NavLink><br></br>
            <NavLink to="/create">Add new Entry</NavLink>
        </div>
    )
}

export default Header;