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
  margin: 6rem auto;
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
  width: 3.5rem;
  height: 2.8rem;
  margin-left: -3.5rem;
  background: none;
  border: none;
  outline: none;
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
              <div class="label">Submit your search</div>
              <div class="searchBar">
                <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value="" />
                <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                  </svg>
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