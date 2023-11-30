import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Routing";
/* eslint-disable no-unused-vars */

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  // * Promises
  useEffect(() => {
    fetch(process.env.BACKEND_URL+"/Logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        navigate("/Login");
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div>Logout</div>;
};

export default Logout;
