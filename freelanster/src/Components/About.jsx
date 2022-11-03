import React from 'react'
import Images from '../Img/imgindex.js'
import styled from 'styled-components';

const About = () => {

  const Wrapper = styled.section`
    #divider3 {
      position: absolute;
      background: #1cd6ce;
      border-radius: 50px;
      height: 4px;
      width: 116px;
      margin-left: 692px;
      margin-top: -19px;
    }
    
    h1 {
      text-align: center;
      color: var(--accent-color);
      font-size: 45px;
      font-weight: bold;
      font-family: "Andada Pro", serif;
    }
    
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      margin-top: 1.5em;
    }
    
    .about-card {
      background-color: var(--shady-white-color);
      position: relative;
      text-align: center;
      overflow: hidden;
      border-radius: 5px;
      /* box-shadow: 5px 5px 15px black; */
      box-shadow: 2.9px 3.4px 3.6px rgba(0, 0, 0, 0.045),
        7.9px 9.3px 10px rgba(0, 0, 0, 0.065),
        19px 22.3px 24.1px rgba(0, 0, 0, 0.085), 63px 74px 80px rgba(0, 0, 0, 0.13);
      margin: 0px 25px;
      padding: 45px 70px;
    }
    
    .img {
      display: inline-block;
      z-index: 1;
      position: relative;
      cursor: pointer;
      margin-bottom: 0px;
      width: 130px;
      height: 130px;
    }
    
    .img::before {
      content: "";
      border-radius: 50%;
      background-color: var(--accent-color);
      position: absolute;
      opacity: 0.2;
      transform: scale(3);
      transition: all 0.3s linear 0s;
      cursor: pointer;
      bottom: 135%;
      right: 0;
      left: 0;
      width: 100%;
      height: 0;
    }
    
    .about-card:hover .img::before {
      height: 100%;
    }
    
    .img:after {
      content: "";
      border-radius: 50%;
      background-color: var(--accent-color);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    
    .img img {
      border-radius: 50%;
      transform: scale(1);
      transition: all 0.8s ease 0s;
      width: 100%;
      height: auto;
      cursor: pointer;
    }
    
    .about-card:hover .img img {
      box-shadow: 0 0 0 14px white;
      transform: scale(0.7);
      cursor: pointer;
    }
    
    .info {
      margin-bottom: 30px;
    }
    
    .info h3 {
      font-family: "Andada Pro", serif;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 5px;
    }
    
    .info span {
      font-family: "Andada Pro", serif;
      display: block;
      font-size: 15px;
      color: #4e5052;
    }
    
    .social {
      background: var(--accent-color);
      position: absolute;
      bottom: -100px;
      left: 0;
      width: 100%;
      padding: 0;
      margin: 0;
      transition: all 0.5s ease 0s;
    }
    
    .about-card:hover .social {
      bottom: 0;
    }
    
    .social li {
      display: inline-block;
    }
    
    .social li a {
      text-decoration: none;
      display: block;
      font-size: 17px;
      color: #fff;
      cursor: pointer;
      padding: 10px;
      transition: all 0.3 ease 0s;
    }
    
    .social li a:hover {
      color: var(--accent-color);
      background: var(--shady-white-color);
    }
    
    `
  return (
    <>
      {/* //? About Us */}
      <Wrapper>
        <div className="Features">
          <p id="s-specialty"> Our Team </p>
        </div>

        <div id="divider3"></div>
        <div className="container">

          <div className="about-card">
            <div className="img">
              <img src={Images.osama} alt="" />
            </div>
            <div className="info">
              <h3>Osama Shaikh</h3>
              <span>Frontend Devoloper</span>
            </div>
            <ul className="social">
              <li><a href="/" className="fab fa-facebook"><span></span></a> </li>
              <li><a href="/" className="fab fa-twitter"><span></span></a> </li>
              <li><a href="/" className="fab fa-instagram"><span></span></a> </li>
              <li><a href="/" className="fab fa-linkedin"><span></span></a> </li>
            </ul>
          </div>

          <div className="about-card">
            <div className="img">
              <img src={Images.bhanu} alt="" />
            </div>
            <div className="info">
              <h3>Bhanu Sunka</h3>
              <span>Full Stack Devoloper</span>
            </div>
            <ul className="social">
              <li><a href="/" className="fab fa-facebook"><span></span></a> </li>
              <li><a href="/" className="fab fa-twitter"><span></span></a> </li>
              <li><a href="/" className="fab fa-instagram"><span></span></a> </li>
              <li><a href="/" className="fab fa-linkedin"><span></span></a> </li>
            </ul>
          </div>

          <div className="about-card">
            <div className="img">
              <img src={Images.harsh} alt="" />
            </div>
            <div className="info">
              <h3>Harsh Dalvi</h3>
              <span>Backend Devoloper</span>
            </div>
            <ul className="social">
              <li><a href="/" className="fab fa-facebook"><span></span></a> </li>
              <li><a href="/" className="fab fa-twitter"><span></span></a> </li>
              <li><a href="/" className="fab fa-instagram"><span></span></a> </li>
              <li><a href="/" className="fab fa-linkedin"><span></span></a> </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      {/* //? ------------------------------------------------------------------------------ */}

    </>
  )
}

export default About