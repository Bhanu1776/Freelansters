import React from 'react'
import './Navbar.css'
import '../FindJobs'
import './FFlancer'
import { NavLink } from 'react-router-dom'

const Navbar = () => {


    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('#navbar');
        navbar.classList.toggle("sticky", window.scrollY > 0)
    })

    return (
        <>
            {/* //? Navigation Bar */}
            <nav id="navbar">
                <div className="d-logo">
                    <span id="logo">Freelanster</span>
                </div>
                <ul>
                    <li><NavLink to="/Home" id="nav-a" >Home</NavLink></li>
                    <li><NavLink to="/FindJobs" id="nav-a">Find Jobs</NavLink></li>
                    <li><NavLink to="/FindFreelancer" id="nav-a">Find Freelancers</NavLink></li>
                    {/* <li><NavLink to="/" id="nav-a">About US</NavLink></li> */}
                    <li><a href="#img1" id="nav-a">About US</a></li>
                </ul>
                <div id="ndb">
                    <button className="nbutton" id="nav-btn"><NavLink to="Login" id="nav-btn-a"> Login </NavLink></button>
                </div>
            </nav>

            {/* //? ------------------------------------------------------------------------------ */}

        </>
    )
}

export default Navbar