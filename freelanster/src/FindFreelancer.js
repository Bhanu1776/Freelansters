import React, { useState } from 'react'
import { Helmet } from "react-helmet";
import Navbar from './Components/Navbar';
import FindFreelan from './Components/FFlancer';
import Footer from './Components/Footer';
import { FilterFreelancer } from './context/freelancercontext';


const FindFreelancer = () => {

    const [loading, setLoading] = useState(true);
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
            setLoading(false);
        }, 0);
    }

    return (
        !loading && (

            <>
            <FilterFreelancer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Find Freelancer</title>
                    <meta name="description" content="The place to get your work done" />
                </Helmet>

                <Navbar color="white" change="Get Hired" />
                <FindFreelan />
                <Footer />
            </FilterFreelancer>
            </>
        )
    );
}

export default FindFreelancer