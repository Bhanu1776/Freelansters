import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Wrapper = styled.section`
    #foot {
      position: relative;
      background-color: #000000;
      color: var(--shady-white-color);
      opacity: 0.9;
      height: 400px;
      margin-top: 50px;
    }
    .center-div {
      position: relative;
      width: 269px;
      height: 235px;
      top: 114px;
      left: 500px;
    }
    .center-div h3 {
      font-family: var(--primary-font);
      font-size: 1.4rem;
    }
    .center-div p {
      position: absolute;
      font-family: var(--primary-font);
      font-size: 1.1rem;
      top: 90px;
    }
    #f-title {
      position: absolute;
      background: transparent;
      font-size: 2.5rem;
      font-family: var(--primary-font);
      color: #1cd6ce;
      top: 100px;
      left: 119px;
    }
    .s-loc {
      position: absolute;
      top: 202px;
      left: 133px;
    }
    .s-phone {
      position: absolute;
      top: 265px;
      left: 134px;
    }
    .s-mail {
      position: absolute;
      top: 323px;
      left: 132px;
    }
    .loc {
      font-family: var(--primary-font);
      position: absolute;
      top: 209px;
      left: 194px;
    }
    .phone {
      font-family: var(--primary-font);
      position: absolute;
      top: 265px;
      left: 194px;
    }
    .mail {
      font-family: var(--primary-font);
      position: absolute;
      top: 324px;
      left: 194px;
    }

    #copyright {
      font-family: var(--primary-font);
      opacity: 0.9;
      text-align: center;
      background-color: black;
      color: var(--shady-white-color);
    }
  `;
  return (
    <>
      {/* //? Footer */}
      <Wrapper>
        <footer id="foot">
          <h1 id="f-title">Freelanster</h1>

          <p className="loc">Republic of Dombivli</p>
          <p className="phone">+91 9136281166</p>
          <p className="mail">Random@gmail.com</p>

          <svg
            className="s-loc"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            height="2.2em"
            width="1.6em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fullrule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="s-phone"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1.35em"
            width="1.8em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
          </svg>
          <svg
            className="s-mail"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.65em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg>

          <div className="center-div">
            <h3>Explore</h3>
            <p>About Us</p>
          </div>
        </footer>

        <main>
          <div id="copyright">
            Copyright &copy; www.Freelanster.com. All rights reserved!
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default Footer;
