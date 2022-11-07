import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FilterJobs, useJobContext } from "../context/jobcontext";
import Navbar from "./Navbar";


const SingleJob = () =>{
    // const {getSingleJob,isSingleLoading,singleJob} = useJobContext();
    let {_id} = useParams();
    console.log(_id);
 

   useEffect(()=>{
       
    // getSingleJob();
   })
   return (
           <h1>{_id}</h1>

   )
}
export default SingleJob