import React, { useState } from "react";
import styled from "styled-components";

const Error = () => {
  const Wrapper = styled.section`
    @import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");

    .Main-div {
      width: 100vw;
      height: 100vh;
      background-color: #313942;
    }
    .Main {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 100vh;
      justify-content: center;
      text-align: center;
    }

    .Main-h1 {
      color: #e7ebf2;
      font-size: 12.5rem;
      letter-spacing: 0.1em;
      margin: 0.025em 0;
      text-shadow: 0.05em 0.05em 0 rgba(0, 0, 0, 0.25);
      white-space: nowrap;
      font-family: "Montserrat", sans-serif;
      font-weight: bolder;
    }
    .Main-span {
      animation: spooky 2s alternate infinite linear;
      color: #528cce;
      display: inline-block;
    }

    .Main-h2 {
      color: #e7ebf2;
      margin-bottom: 0.4em;
      font-family: "Montserrat", sans-serif;
      font-weight: bolder;
    }

    .Main-p {
      color: #ccc;
      margin-top: 0;
      font-family: "Montserrat", sans-serif;
    }

    @keyframes spooky {
      from {
        transform: translatey(0.15em) scaley(0.95);
      }

      to {
        transform: translatey(-0.15em);
      }
    }
    .myButton {
      box-shadow: 0px 10px 14px -7px #276873;
      background: linear-gradient(to bottom, #6bb3ff 5%, #528cce 100%);
      background-color: #6bb3ff;
      border-radius: 8px;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      font-family: Arial;
      font-size: 20px;
      font-weight: bold;
      padding: 7px 56px;
      text-decoration: none;
      text-shadow: 0px 1px 0px #3d768a;
      margin-top: 8px;
    }
    .myButton:hover {
      background: linear-gradient(to bottom, #528cce 5%, #6bb3ff 100%);
      background-color: #70a7e7;
    }
    .myButton:active {
      position: relative;
      top: 1px;
    }
  `;

  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 0);
  }

  return (
    !loading && (
      <>
        <Wrapper>
          <div className="Main-div">
            <main className="Main">
              <h1 className="Main-h1">
                4
                <span className="Main-span">
                  <i className="fas fa-ghost"></i>
                </span>
                4
              </h1>
              <h2 className="Main-h2">Error: 404 page not found</h2>
              <p className="Main-p">
                Sorry, the page you're looking for cannot be accessed
              </p>
              <a href="/" className="myButton">
                Home
              </a>
            </main>
          </div>
        </Wrapper>
      </>
    )
  );
};

export default Error;
