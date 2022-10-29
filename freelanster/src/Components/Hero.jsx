import React from 'react'
import styled from 'styled-components';


const Hero = () => {
    const Wrapper = styled.section`
    section.static {
  position: relative;
  width: 98.9vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
}
section.static::before {
  content: " ";
  position: absolute;
  background-image: url("https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
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
`
  return (
      <>
      <Wrapper>
         <section className="static">
        <div className="textArea">
            <h1>Find Jobs</h1>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati qui ducimus aliquid? Iste, impedit
                nemo.
            </p>
        </div>
    </section>
    </Wrapper>
    </>
  )
}

export default Hero