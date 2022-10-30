import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/Logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            navigate('/Login')
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    })
    
  return (
    <div>Logout</div>
  )
}

export default Logout