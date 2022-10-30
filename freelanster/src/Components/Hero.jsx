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

.wrapper {
  width: 100%;
  max-width: 31.25rem;
  margin: 3rem auto;
}

.label {
  font-size: .625rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: +1.3px;
  margin-bottom: 1rem;
}

.searchBar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#searchQueryInput {
  width: 100%;
  height: 2.8rem;
  background: #f5f5f5;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
}

#searchQuerySubmit {
  width: 5rem;
  height: 2.6rem;
  margin-left: -5.2rem;
  border-radius: 1.625rem;
  background: #00c8aa;
  outline: none;
  border: none;
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
            <h1>Find Jobs</h1>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati qui ducimus aliquid? Iste, impedit
              nemo.
            </p>
            <div class="wrapper">
              <div class="searchBar">
                <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Find Jobs" />
                <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">Search
                </button>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  )
}

export default Hero