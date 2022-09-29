import React from 'react'
import './Navbar.css'
import '../FindJobs'

const Navbar = () => {
    return (
        <>
            {/* //? Navigation Bar */}
            <nav id="navbar">
                <div className="d-logo">
                    <span id="logo">Freelanster</span>
                </div>
                <ul>
                    <li><a href="/" id="nav-a" className="active">Home</a></li>
                    <li><a href="/" id="nav-a">Find Jobs</a></li>
                    <li><a href="/" id="nav-a">Find Freelancers</a></li>
                    <li><a href="/" id="nav-a">About US</a></li>
                </ul>
                <div id="ndb">
                    <button className="nbutton" id="nav-btn"><a href="login.html" id="nav-btn-a"> Login </a></button>
                </div>
            </nav>

            {/* //? ------------------------------------------------------------------------------ */}

        </>
    )
}

export default Navbar