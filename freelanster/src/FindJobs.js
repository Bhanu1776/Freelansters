import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Filter from './Components/Filter';
import Footer from './Components/Footer';


const FindJobs = () => {

    const navigate = useNavigate();

    const callFJ = async () => {

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
        callFJ();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Find Jobs</title>
                <meta name="description" content="The place to get your work done" />
            </Helmet>

            <Navbar />
            <Hero />
            <Filter />
            <Footer />
        </>
    )
}

export default FindJobs