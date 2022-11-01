import React, { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../Routing';
// import styled from 'styled-components';
/* eslint-disable no-unused-vars */


const Navbar = () => {

    const { state, dispatch } = useContext(UserContext);

    //* Login/Logout Functionality
    const RenderMenu = () => {
        if (state) {
            return (
                <div id="ndb">
                    <button className="nbutton" id="nav-btn"><NavLink to="./Logout" id="nav-btn-a"> Logout </NavLink></button>
                </div>
            );
        }
        else {
            return (
                <div id="ndb">
                    <button className="nbutton" id="nav-btn"><NavLink to="./Login" id="nav-btn-a"> Login </NavLink></button>
                </div>
            );
        }
    }


    //* Progress bar in navbar on scroll
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
    

    //* Navbar sticky on scroll
    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('#navbar');
        navbar.classList.toggle("sticky", window.scrollY > 0)
    });

    return (
        <>
           {/* <Wrapper> */}
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
                    <li><NavLink to="/FindFreelancer" id="nav-a">Find Freelancers</NavLink></li>
                    {/* <li><NavLink to="/" id="nav-a">About US</NavLink></li> */}
                    <li><a href="#img1" id="nav-a">Contact Us</a></li>
                </ul>
                <RenderMenu/>
            </nav>
            {/* </Wrapper> */}
        </>
    )
}

export default Navbar