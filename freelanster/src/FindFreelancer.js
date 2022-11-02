import React from 'react'
import { Helmet } from "react-helmet";
import Navbar from './Components/Navbar';
import FindFreelan from './Components/FFlancer';
import Footer from './Components/Footer';


const FindFreelancer = () => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Find Freelancer</title>
                <meta name="description" content="The place to get your work done" />
            </Helmet>

            <Navbar />
            <FindFreelan />
            <Footer />
        </>
    )
}

export default FindFreelancer