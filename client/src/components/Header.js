import React from "react";
import { NavLink } from "react-router-dom";


const Header = () =>{
    return (
        <div className="Header">
            <h1 class="display-1" >Mindful Moments</h1>
            <div className="Links">
            <NavLink to="/">Home</NavLink><br></br>
            <NavLink to="/create">Add new Entry</NavLink><br></br>
            <NavLink to="/entries">All My Entries</NavLink>
            </div>
        </div>
    )
}

export default Header;