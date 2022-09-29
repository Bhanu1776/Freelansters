import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Filter from './Components/Filter';
import Footer from './Components/Footer';


const FindJobs = () => {

    //* Logic for implementing the navbar

    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('#navbar');
        navbar.classList.toggle("sticky", window.scrollY > 0)
    })

    return (
        <>
            <Navbar />
            <Hero />
            <Filter />
            <Footer />
        </>
    )
}

export default FindJobs