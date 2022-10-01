import React from 'react'
import Images from '../Img/imgindex.js'
import './About.css'

const About = () => {
  return (
      <>
   {/* //? About Us */}

            <div className="Features">
                <p id="s-specialty"> Our Team </p>
            </div>

            <div id="divider3"></div>
            <div className="container">
                <div className="about-card">
                    <div className="img">
                        <img src={Images.harsh} alt="" />
                    </div>
                    <div className="info">
                        <h3>Harsh Dalvi</h3>
                        <span>Piroo Developur</span>
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
                        <span>SaxX Developur</span>
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
                        <img src={Images.osama} alt="" />
                    </div>
                    <div className="info">
                        <h3>Osama Shaikh</h3>
                        <span>Developur Ssrly??</span>
                    </div>
                    <ul className="social">
                        <li><a href="/" className="fab fa-facebook"><span></span></a> </li>
                        <li><a href="/" className="fab fa-twitter"><span></span></a> </li>
                        <li><a href="/" className="fab fa-instagram"><span></span></a> </li>
                        <li><a href="/" className="fab fa-linkedin"><span></span></a> </li>
                    </ul>
                </div>
            </div>

            {/* //? ------------------------------------------------------------------------------ */}
   
      </>
  )
}

export default About