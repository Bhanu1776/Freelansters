import React from 'react'
import './CateCards.css'
// import '../CateCards.js'

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow"

// import required modules
import { Pagination, Navigation, EffectCoverflow } from "swiper";


import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
import "https://unpkg.com/swiper@8/swiper-bundle.min.js"
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"



const CateCards = () => {
    return (  
        <>
            
            <Swiper id='container-cards-carousel'
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}

                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}

                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Navigation, EffectCoverflow]}
                className="container-carousel">
                
            <section className="container-carousel">
                <div className="swiper catecards-slider">
                   
                        {/* <!-- Slide-start --> */}
                        <div className="swiper catecards-slide">
                            <SwiperSlide className='card' style={{ maxWidth: "fit-content", maxHeight: "fit-content", padding:"0px",margin:"0px"}}>
                            <div className="card-1 card">
                                <div className="card-content">
                                    {/* <!-- <img src="C:\Users\ASUS\Desktop\images\tranding-food-1.png" alt="Tranding"> --> */}
                                    <h2 className="card-title">Graphic Design</h2>
                                    <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Inventore,
                                        praesentium.</p>
                                    <a href="/" className="button">Learn More</a>
                                </div>
                            </div>
                            </SwiperSlide>
                        </div>
                        {/* <!-- Slide-end --> */}

                        {/* <!-- Slide-start --> */}
                        <div className="swiper-slide catecards-slide">
                            <SwiperSlide className='card' style={{ maxWidth: "fit-content", maxHeight:"fit-content" }}> 
                            <div className="card-2 card">
                                {/* <!-- <img src="C:\Users\ASUS\Desktop\images\tranding-food-2.png" alt="Tranding"> --> */}
                                <div className="card-content">
                                    <h2 className="card-title">Article Writing</h2>
                                    <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Inventore,
                                        praesentium.</p>
                                    <a href="/" className="button">Learn More</a>
                                </div>
                            </div>
                            </SwiperSlide>
                        </div>
                        {/* <!-- Slide-end --> */}

                        {/* <!-- Slide-start --> */}
                        <div className="swiper-slide catecards-slide">
                            <SwiperSlide className='card' style={{ maxWidth: "fit-content", maxHeight: "fit-content" }}>
                            <div className="card-3 card">
                                {/* <!-- <img src="C:\Users\ASUS\Desktop\images\tranding-food-3.png" alt="Tranding"> --> */}
                                <div className="card-content">
                                    <h2 className="card-title">Video Editing</h2>
                                    <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Inventore,
                                        praesentium.</p>
                                    <a href="/" className="button">Learn More</a>
                                </div>
                            </div>
                            </SwiperSlide>
                        </div>
                        {/* <!-- Slide-end --> */}

                        {/* <!-- Slide-start --> */}
                        <div className="swiper-slide catecards-slide">
                            <SwiperSlide className='card' style={{ maxWidth: "fit-content", maxHeight: "fit-content" }}>
                            <div className="catecards-slide-img card-4 card">
                                {/* <!-- <img src="C:\Users\ASUS\Desktop\images\tranding-food-4.png" alt="Tranding"> --> */}
                                <div className="card-content">
                                    <h2 className="card-title">Accountant</h2>
                                    <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Inventore,
                                        praesentium.</p>
                                    <a href="/" className="button">Learn More</a>
                                </div>
                            </div>
                            </SwiperSlide>
                        </div>
                        {/* <!-- Slide-end --> */}

                        {/* <!-- Slide-start --> */}
                        <div className="swiper-slide catecards-slide">
                            <SwiperSlide className='card' style={{ maxWidth: "fit-content", maxHeight: "fit-content" }}>
                            <div className="catecards-slide-img card-5 card">
                                {/* <!-- <img src="C:\Users\ASUS\Desktop\images\tranding-food-5.png" alt="Tranding"> --> */}
                                <div className="card-content">
                                    <h2 className="card-title">Android Developer</h2>
                                    <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Inventore,
                                        praesentium.</p>
                                    <a href="/" className="button">Learn More</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        </div>
                        {/* <!-- Slide-end --> */}

                        {/* <!-- Slide-start --> */}
                        <div className="swiper-slide catecards-slide">
                            <SwiperSlide className='card' style={{ maxWidth: "fit-content", maxHeight:"fit-content" }}>
                            <div className="catecards-slide-img card-6 card">
                                {/* <!-- <img src="C:\Users\ASUS\Desktop\images\tranding-food-6.png" alt="Tranding"> --> */}
                                <div className="card-content">
                                    <h2 className="card-title">Data Entry</h2>
                                    <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Inventore,
                                        praesentium.</p>
                                    <a href="/" className="button">Learn More</a>
                                </div>
                            </div>
                            </SwiperSlide>
                        </div>
                        {/* <!-- Slide-end --> */}

                        {/* <!-- Slide-start --> */}
                        <div className="swiper-slide catecards-slide">
                            <SwiperSlide className='card' style={{ maxWidth: "fit-content", maxHeight: "fit-content" }}>
                            <div className="catecards-slide-img card-7 card">
                                {/* <!-- <img src="C:\Users\ASUS\Desktop\images\tranding-food-7.png" alt="Tranding"> --> */}
                                <div className="card-content">
                                    <h2 className="card-title">Logistics</h2>
                                    <p className="card-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Inventore,
                                        praesentium.</p>
                                    <a href="/" className="button">Learn More</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        </div>
                        {/* <!-- Slide-end --> */}
                 
                
                    
                    
                    

                </div>
            </section>
        </Swiper>
            <div class="catecards-slider-control">
                <div class="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div class="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </>
    )
}

export default CateCards