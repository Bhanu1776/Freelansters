import React from "react";
import "./CateCards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Pagination, Navigation, EffectCoverflow } from "swiper";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const CateCards = () => {
  return (
    <>
      <Swiper
        id="container-cards-carousel"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        style={{}}
        modules={[Pagination, Navigation, EffectCoverflow]}
        className="catecards-slider"
      >
        <section className="container-carousel">
          <div className="swiper catecards-slider">
            {/* <!-- Slide-start --> */}
            <div className="swiper catecards-slide">
              <SwiperSlide
                style={{
                  maxWidth: "max-content",
                  maxHeight: "max-content",
                  padding: "1rem",
                  background: "transparent",
                  borderRadius: "2rem",
                }}
              >
                <div
                  data-aos="zoom-out-down"
                  data-aos-offset="350"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  className="card-1 card"
                >
                  <div className="card-content">
                    <h2 className="card-title">Graphic Design</h2>
                    <p className="card-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore, praesentium.
                    </p>
                    {/* <a href="/" className="button">
                      Learn More
                    </a> */}
                  </div>
                </div>
              </SwiperSlide>
            </div>
            {/* <!-- Slide-end --> */}

            {/* <!-- Slide-start --> */}
            <div className="swiper-slide catecards-slide">
              <SwiperSlide
                style={{
                  maxWidth: "max-content",
                  maxHeight: "max-content",
                  padding: "1rem",
                  background: "transparent",
                  borderRadius: "2rem",
                }}
              >
                <div
                  data-aos="fade-right"
                  data-aos-offset="350"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  className="card-2 card"
                >
                  <div className="card-content">
                    <h2 className="card-title">Article Writing</h2>
                    <p className="card-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore, praesentium.
                    </p>
                    {/* <a href="/" className="button">
                      Learn More
                    </a> */}
                  </div>
                </div>
                {/* </motion.div> */}
              </SwiperSlide>
            </div>
            {/* <!-- Slide-end --> */}

            {/* <!-- Slide-start --> */}
            <div className="swiper-slide catecards-slide">
              <SwiperSlide
                style={{
                  maxWidth: "max-content",
                  maxHeight: "max-content",
                  padding: "1rem",
                  background: "transparent",
                  borderRadius: "2rem",
                }}
              >
                <div
                  data-aos="fade-right"
                  data-aos-offset="350"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  className="card-3 card"
                >
                  <div className="card-content">
                    <h2 className="card-title">Video Editing</h2>
                    <p className="card-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore, praesentium.
                    </p>
                    <a href="/" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            {/* <!-- Slide-end --> */}

            {/* <!-- Slide-start --> */}
            <div className="swiper-slide catecards-slide">
              <SwiperSlide
                style={{
                  maxWidth: "max-content",
                  maxHeight: "max-content",
                  padding: "1rem",
                  background: "transparent",
                  borderRadius: "2rem",
                }}
              >
                <div
                  data-aos="fade-right"
                  data-aos-offset="350"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  className="card-4 card"
                >
                  <div className="card-content">
                    <h2 className="card-title">Accountant</h2>
                    <p className="card-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore, praesentium.
                    </p>
                    <a href="/" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            {/* <!-- Slide-end --> */}

            {/* <!-- Slide-start --> */}
            <div className="swiper-slide catecards-slide">
              <SwiperSlide
                style={{
                  maxWidth: "max-content",
                  maxHeight: "max-content",
                  padding: "1rem",
                  background: "transparent",
                  borderRadius: "2rem",
                }}
              >
                <div
                  data-aos="fade-left"
                  data-aos-offset="350"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  className="card-5 card"
                >
                  <div className="card-content">
                    <h2 className="card-title">Android Developer</h2>
                    <p className="card-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore, praesentium.
                    </p>
                    <a href="/" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            {/* <!-- Slide-end --> */}

            {/* <!-- Slide-start --> */}
            <div className="swiper-slide catecards-slide">
              <SwiperSlide
                style={{
                  maxWidth: "max-content",
                  maxHeight: "max-content",
                  padding: "1rem",
                  background: "transparent",
                  borderRadius: "2rem",
                }}
              >
                <div
                  data-aos="fade-left"
                  data-aos-offset="350"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  className="card-6 card"
                >
                  <div className="card-content">
                    <h2 className="card-title">Data Entry</h2>
                    <p className="card-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore, praesentium.
                    </p>
                    <a href="/" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
                {/* </motion.div> */}
              </SwiperSlide>
            </div>
            {/* <!-- Slide-end --> */}

            {/* <!-- Slide-start --> */}
            <div className="swiper-slide catecards-slide">
              <SwiperSlide
                style={{
                  maxWidth: "max-content",
                  maxHeight: "max-content",
                  padding: "1rem",
                  background: "transparent",
                  borderRadius: "2rem",
                }}
              >
                <div
                  data-aos="fade-left"
                  data-aos-offset="350"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  className="card-7 card"
                >
                  <div className="card-content">
                    <h2 className="card-title">Logistics</h2>
                    <p className="card-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore, praesentium.
                    </p>
                    <a href="/" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            {/* <!-- Slide-end --> */}
          </div>
        </section>
      </Swiper>
      <div className="catecards-slider-control">
        <div className="swiper-button-prev slider-arrow">
          <FaChevronCircleLeft className="ion-icon" />
        </div>
        <div className="swiper-button-next slider-arrow">
          <FaChevronCircleRight className="ion-icon" />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default CateCards;
