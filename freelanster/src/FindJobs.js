import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Filter from './Components/Filter';
import Footer from './Components/Footer';

const FJHeroImg = 'url("https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80")';

const FindJobs = () => {

    const [loading, setLoading] = useState(true);
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
            setLoading(false);
        }, 0);
    }

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


    //* Fetching Jobs Data

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');


    const JobsFetch = async (e) => {
        e.preventDefault();

        const res = await fetch('/Jobs', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                date,
                description,
            })
        });

        const data1 = res.json();

        if (res.status === 400 || !data1) {
            window.alert('Error 400')
        } else {
            window.alert('Done')
            console.log(data1);
        }
    }
    useEffect(() => {
        JobsFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        !loading && (

            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Find Jobs</title>
                    <meta name="description" content="The place to get your work done" />
                </Helmet>

                <Navbar color="white" change="Post Job" link="/FindJobs/PostJobs" />
                <Hero title="Find Jobs" desc=" The Best Place where you can find jobs" img={FJHeroImg} placeholder="Find Jobs" />
                <Filter />
                <Footer />
            </>
        )
    );
}

export default FindJobs