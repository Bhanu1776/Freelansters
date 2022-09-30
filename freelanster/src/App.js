import React from 'react'
import './App.css'
import Images from './Img/imgindex.js'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const svg1 = {
    position: "relative",
    marginTop: "128px",
    marginLeft: "50px",
    marginRight: "50px"
}


const App = () => {

    //* ------------------------------------------------------------------------------

    //* Logic for implementing the navbar

    window.addEventListener('scroll', function () {
        var navbar = document.querySelector('#navbar');
        navbar.classList.toggle("sticky", window.scrollY > 0)
    })

    // //* Logic for implementing carasol
    // const slides = document.querySelectorAll(".slide");

    // slides.forEach((slide, indx) => {
    //     slide.style.transform = `translateX(${indx * 100}%)`;
    // });


    // const nextSlide = document.querySelector(".btn-next");

    // let curSlide = 0;
    // let maxSlide = slides.length - 1;

    // nextSlide.addEventListener("click", function () {

    //     if (curSlide === maxSlide) {
    //         curSlide = 0;
    //     } else {
    //         curSlide++;
    //     }

    //     slides.forEach((slide, indx) => {
    //         slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    //     });
    // });

    // const prevSlide = document.querySelector(".btn-prev");

    // prevSlide.addEventListener("click", function () {

    //     if (curSlide === 0) {
    //         curSlide = maxSlide;
    //     } else {
    //         curSlide--;
    //     }

    //     slides.forEach((slide, indx) => {
    //         slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    //     });
    // });

    //* ------------------------------------------------------------------------------


    return (
        <>
            <Navbar />

            {/* //? Carasol Section */}

            <div id="carasol">
                <div className="slider">
                    {/*  slide 1 */}
                    <div className="slide">
                        <img
                            src={Images.slider1} alt="Top Jobs" />
                    </div>

                    {/* slide 2 */}
                    <div className="slide">
                        <img src={Images.slider2} alt="Top Freelancers" />
                    </div>

                    {/* slide 3 */}
                    <div className="slide">
                        <img src={Images.slider3} alt="Hire Now!" />
                    </div>

                    {/* slide 4 */}
                    <div className="slide">
                        <img src="https://source.unsplash.com/random?landscape,city" alt="" />
                    </div>

                    {/* Control buttons */}
                    <button className="btn btn-next">&gt;</button>
                    <button className="btn btn-prev">&lt;</button>
                </div>
            </div>

            {/* //? ------------------------------------------------------------------------------ */}


            {/* //? Website Features */}

            <section id="Website-des">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={svg1}><path fill="#1cd6ce" fill-opacity="0.8" d="M0,256L60,224C120,192,240,128,360,128C480,128,600,192,720,192C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{
                    position: "relative",
                    marginTop: "-5px",
                    marginLeft: "50px",
                    marginRight: " 50px"
                }}><path fill="#1cd6ce" fill-opacity="0.8" d="M0,128L120,112C240,96,480,64,720,58.7C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>

                <div className="glass">

                    <h1>Why to choose Freelanster ?</h1>
                    <div className="divider-h"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repudiandae voluptatum aperiam fugit fugiat deserunt accusantium, aut, officia neque assumenda odio quisquam sequi atque iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, enim.</p>
                    <div className="g-button-div">
                        <button className="g-button">See More</button>
                    </div>
                    <img id="g-img" src={Images.glass} alt="Freelanster" />
                </div>
            </section>

            {/* //? ------------------------------------------------------------------------------ */}


            {/* //? Categories */}
            <div className="Features">
                <p id="s-specialty"> Job Categories </p>
            </div>

            <div id="divider2"></div>

            <div className="container-carousel">
                <input type="radio" name="slider" id="item-1" checked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <input type="radio" name="slider" id="item-4" />
                <input type="radio" name="slider" id="item-5" />
                <input type="radio" name="slider" id="item-6" />
                <input type="radio" name="slider" id="item-7" />
                <div className="cards-carousel">
                    <label className="card-display" for="item-1" id="cate-1">
                        <div className="card card-1">
                            <div className="card-content">
                                <h2 className="card-title">Graphic Design</h2>
                                <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
                                    praesentium.</p>
                                <a href="/" className="button">Learn More</a>
                            </div>
                        </div>
                    </label>
                    <label className="card-display" for="item-2" id="cate-2">
                        <div className="card card-2">
                            <div className="card-content">
                                <h2 className="card-title">Article Writing</h2>
                                <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
                                    praesentium.</p>
                                <a href="/" className="button">Learn More</a>
                            </div>
                        </div>
                    </label>
                    <label className="card-display" for="item-3" id="cate-3">
                        <div className="card card-3">
                            <div className="card-content">
                                <h2 className="card-title">Video Editing</h2>
                                <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
                                    praesentium.</p>
                                <a href="/" className="button">Learn More</a>
                            </div>
                        </div>
                    </label>
                    <label className="card-display" for="item-4" id="cate-4">
                        <div className="card card-4">
                            <div className="card-content">
                                <h2 className="card-title">Accountant</h2>
                                <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
                                    praesentium.</p>
                                <a href="/" className="button">Learn More</a>
                            </div>
                        </div>
                    </label>
                    <label className="card-display" for="item-5" id="cate-5">
                        <div className="card card-5">
                            <div className="card-content">
                                <h2 className="card-title">Android Developer</h2>
                                <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
                                    praesentium.</p>
                                <a href="/" className="button">Learn More</a>
                            </div>
                        </div>
                    </label>
                    <label className="card-display" for="item-6" id="cate-6">
                        <div className="card card-6">
                            <div className="card-content">
                                <h2 className="card-title">Data Entry</h2>
                                <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
                                    praesentium.</p>
                                <a href="/" className="button">Learn More</a>
                            </div>
                        </div>
                    </label>
                    <label className="card-display" for="item-7" id="cate-7">
                        <div className="card card-7">
                            <div className="card-content">
                                <h2 className="card-title">Logistics</h2>
                                <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
                                    praesentium.</p>
                                <a href="/" className="button">Learn More</a>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            {/* <!-- Temp Div --> */}
            <div style={{ height: "100px" }}> </div>

            {/* //? ------------------------------------------------------------------------------ */}


            {/* //? Features Section */}

            <article id="Features-arc">
                <div className="Features">
                    <p id="s-specialty"> Freelansters Specialty </p>
                </div>

                <div id="divider"></div>

                <div id="Features-div" style={{ position: "relative", marginTop: "50px" }}>
                    <h3>Post a Job</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam adipisci voluptates alias, sit asperiores odio ad cum quo, sapiente at maiores, illo inventore laboriosam.</p>
                    <h3>Choose Freelancers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam adipisci voluptates alias, sit asperiores odio ad cum quo, sapiente at maiores, illo inventore laboriosam.</p>
                    <h3>Pay Securely</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam adipisci voluptates alias, sit asperiores odio ad cum quo, sapiente at maiores, illo inventore laboriosam.</p>
                    <h3>We're here to help</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aperiam adipisci voluptates alias, sit asperiores odio ad cum quo, sapiente at maiores, illo inventore laboriosam.</p>

                    <img src={Images.Features} alt="" className="f-img" />

                    <span className="circle">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                    </span>

                    <div className="shape-img1"><img src={Images.shape1} alt="s" /></div>
                    <div className="shape-img2"><img src={Images.shape2} alt="s" /></div>
                    <div className="shape-img3"><img src={Images.shape3} alt="s" /></div>
                    <div className="shape-img4"><img src={Images.shape4} alt="s" /></div>
                    <div className="shape-img5"><img src={Images.shape5} alt="s" /></div>
                    <div className="shape-img6"><img src={Images.shape6} alt="s" /></div>
                    <div className="shape-img7"><img src={Images.shape7} alt="s" /></div>
                    <div className="shape-img8"><img src={Images.shape8} alt="s" /></div>
                    <div className="shape-img9"><img src={Images.shape9} alt="s" /></div>
                    <div className="shape-img10"><img src={Images.shape10} alt="s" /></div>
                    <div className="shape-img11"><img src={Images.shape11} alt="s" /></div>
                </div>
            </article>

            {/* //? ------------------------------------------------------------------------------ */}


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

            <Footer />

        </>
    )
}

export default App