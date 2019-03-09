import React from "react";
import { NavLink } from "react-router-dom";

const SignedIn = () => {
    
    return (
        <ul className="nav navbar-nav navbar-right">
            <li>
                <NavLink to="/">New Project</NavLink>
            </li>
            <li>
                <NavLink to="/">Logout</NavLink>
            </li>
            <li>
                <NavLink to="/" className="dot">BD</NavLink>
            </li>
        </ul>
    )
}

export default SignedIn;