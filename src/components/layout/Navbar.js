import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const Navbar = () => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Project name</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <SignedIn />
                    <SignedOut />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;