import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Navbar from './Components/Navbar';
import FindFreelan from './Components/FFlancer';
import GoToTop from './Components/GoToTop';
import Footer from './Components/Footer';
import { FilterFreelancer } from './context/freelancercontext';
import { UserContext } from "./Routing";


const FindFreelancer = () => {

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

    const callFF = async () => {

        try {
            const res = await fetch(process.env.BACKEND_URL+'/FreelancersFetch', {
                method: "GET",                        //! IMP
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            dispatch({ type: "USER", payload: true });

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
            <FilterFreelancer>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Find Freelancer</title>
                    <meta name="description" content="The place to get your work done" />
                </Helmet>

                <Navbar color="white" change="Profile" link="/FindFreelancer/Profile" />
                <FindFreelan />
                <GoToTop />
                <Footer />
            </FilterFreelancer>
            </>
        )
    );
}

export default FindFreelancer