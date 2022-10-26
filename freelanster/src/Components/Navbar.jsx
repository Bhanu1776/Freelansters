import React, { useEffect, useState } from 'react'
import './Navbar.css'
import '../FindJobs'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 99.9;
        setScrollTop(scrolled)}
        useEffect(() => {
            window.addEventListener("scroll", onScroll)
            return() => window.removeEventListener("scroll",onScroll)
        }, []);
    

    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('#navbar');
        navbar.classList.toggle("sticky", window.scrollY > 0)
    });

    return (
        <>
            {/* //? Navigation Bar */}
            <div className='progressbar'>
                <div className='progressbarIn' style={{width: `${scrollTop}%`}}></div>
            </div>
            <nav id="navbar">
                <div className="d-logo">
                    <span id="logo">Freelanster</span>
                </div>
                <ul>
                    <li><NavLink to="/Home" id="nav-a" >Home</NavLink></li>
                    <li><NavLink to="/FindJobs" id="nav-a">Find Jobs</NavLink></li>
                    <li><NavLink to="/FindFreelancers" id="nav-a">Find Freelancers</NavLink></li>
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