import React from "react";
import styled from "styled-components";

const Hero = (props) => {
  const Wrapper = styled.section`
    section.static {
      position: relative;
      width: 99.3vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
    }
    section.static::before {
      content: " ";
      position: absolute;
      background-image: ${props.img};
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      background-attachment: fixed;
      height: 100%;
      width: 100%;
      filter: brightness(50%);
    }
    section.static h1 {
      font-family: "Noto Serif Georgian", serif;
      font-size: 4rem;
      text-align: center;
      color: var(--shady-white-color);
    }
    .static p {
      font-family: "Cormorant Garamond", serif;
      font-size: 1.4em;

      text-align: center;
      color: var(--shady-white-color);
    }
    .textArea {
      position: absolute;
      width: 60vw;
    }

    .wrapper {
      width: 100%;
      max-width: 31.25rem;
      margin: 3rem auto;
    }

    .label {
      font-size: 0.625rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: +1.3px;
      margin-bottom: 1rem;
    }

    .searchBar {
      width: 110%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: -20px;
    }

    #searchQueryInput {
      width: 100%;
      height: 3.1rem;
      background: #edf0f0;
      outline: none;
      border: none;
      border-radius: 1.625rem;
      padding: 0 3.5rem 0 1.5rem;
      font-size: 1rem;
    }

    #searchQuerySubmit {
      width: 5.4rem;
      height: 2.7rem;
      margin-left: -5.6rem;
      border-radius: 1.625rem;
      background: #00c8aa;
      outline: none;
      border: none;
      font-family: var(--primary-font);
      font-weight: bold;
      color: #272727;
    }

    #searchQuerySubmit:hover {
      cursor: pointer;
    }
  `;
  return (
    <>
      <Wrapper>
        <section className="static">
          <div className="textArea">
            <h1
              data-aos="fade-down"
              data-duration="2000"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
            >
              {props.title}
            </h1>
            <br />
            <p
              data-aos="fade-up"
              data-duration="2000"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
            >
              {props.desc}
            </p>
            <div className="wrapper">
              <div
                data-aos="zoom-in"
                data-duration="2000"
                data-aos-delay="400"
                data-aos-easing="ease-in-out"
                className="searchBar"
              >
                <input
                  id="searchQueryInput"
                  type="text"
                  name="searchQueryInput"
                  placeholder={props.placeholder}
                />
                {/* </form> */}
                <button
                  id="searchQuerySubmit"
                  type="submit"
                  name="searchQuerySubmit"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Hero;
