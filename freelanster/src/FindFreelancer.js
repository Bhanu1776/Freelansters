import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Navbar from './Components/Navbar';
import FindFreelan from './Components/FFlancer';
import Footer from './Components/Footer';


const FindFreelancer = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
            setLoading(false);
        }, 0);
    }

    const callFF = async () => {

        try {
            const res = await fetch('/Findjobs', {
                method: "GET",                        //! IMP
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate('/Login')
        }
    }

    useEffect(() => {
        callFF();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        !loading && (

            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Find Freelancer</title>
                    <meta name="description" content="The place to get your work done" />
                </Helmet>

                <Navbar color="white" change="Get Hired" />
                <FindFreelan />
                <Footer />
            </>
        )
    );
}

export default FindFreelancer