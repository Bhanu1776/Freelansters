/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Filter from './Components/Filter';
import GoToTop from './Components/GoToTop';
import Footer from './Components/Footer';
import { FilterJobs } from './context/jobcontext';
import { FilterContextProvider } from './context/filtercontext';
import { UserContext } from "./Routing";

const FJHeroImg = 'url("https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80")';

const FindJobs = () => {

    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const { state, dispatch } = useContext(UserContext);

    const [loading, setLoading] = useState(true);
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
            setLoading(false);
        }, 0);
    }


    const callFJ = async () => {

        try {
            const res = await fetch(process.env.BACKEND_URL+'/Findjobs', {
                method: "GET",                        //! IMP
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            dispatch({ type: "USER", payload: true });

            const data = await res.json();
            // console.log(data);

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
        !loading && (

            <>
                <FilterJobs>
                    <FilterContextProvider>
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>Find Jobs</title>
                            <meta name="description" content="The place to get your work done" />
                        </Helmet>

                        <Navbar color="white" change="Profile" link="/FindJobs/Profile" />
                        <Hero title="Find Jobs" desc=" The Best Place where you can find jobs" img={FJHeroImg} placeholder="Find Jobs" />
                        <Filter />
                        <GoToTop />
                        <Footer />
                    </FilterContextProvider>
                </FilterJobs>
            </>
        )
    );
}

export default FindJobs