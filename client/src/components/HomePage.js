import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// Get the Home page to display the UI button and link to the create route
// Create a header component to display the name of the project

const HomePage = () => {
    
    return (
        <div>
            <h2>This is a space where you get to jot down all that you are grateful for.</h2>
            <button><Link to={`/entry/create`}></Link></button>
        </div>
    )
    
}


export default HomePage;
