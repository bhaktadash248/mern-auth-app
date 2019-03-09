import React from "react";
import { NavLink } from "react-router-dom";

const SignedOut = () => {
    return(
        <ul className="nav navbar-nav navbar-right">
            <li>
                <NavLink to="/">SignIn</NavLink>
            </li>
            <li>
                <NavLink to="/">SignUp</NavLink>
            </li>
        </ul>
    )
}

export default SignedOut;