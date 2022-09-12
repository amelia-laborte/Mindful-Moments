import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// Create a header component to display the name of the project

const HomePage = () => {
    
    return (
        <div>
            <h2>This is a space where you get to jot down all that you are grateful for.</h2>
            <Link to={`/create`}>
                <button>Begin My Journey</button>
            </Link>
        </div>
    )
    
}


export default HomePage;
