import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  background-color: var(--shady-white-color);
}
html {
  scroll-behavior: smooth;
}

:root {
  --shady-white-color: #f5f5f5; /* #fafffe*/
  --accent-color: #1cd6ce; /*#00c8aa*/
  --section-font: "Acme", sans-serif;
  --primary-font: "PT Serif", serif;
  --clr-neutral-900: hsl(207, 19%, 9%);
  --clr-neutral-100: hsl(0, 0%, 100%);
  --clr-accent-400: hsl(142, 90%, 61%);
  --padding: 1.5rem;
}

::-webkit-scrollbar {
  width: 11px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(transparent, #09a991);
  border-radius: 6px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #1cd6ce);
}

/*--------------------------------------------CSS FOR NAVBAR-------------------------------------------------------------------- */
.progressbar{
  background-color: rgba(255, 255, 255, 0);
  height:5px;
  position: sticky;
  top:0;
  left:0;
  z-index: 4;
  width: 100%;
}

.progressbarIn{
 height:5px;
 background: #00c8aa;
 /* width: 15%; */
}
#navbar {
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 2;
  transition: 0.6s;
  height: 54px;
  width: 100%;
  top: 0px;
}

#logo {
  font-family: "PT Serif", "Caveat";
  /* position:relative; */
  display: inline-block;
  font-size: 1.5rem;
  margin-left: 50px;
  transition: 0.6s;
}

#logo:hover {
  transform: scale(1.1);
}

#navbar ul {
  display: flex;
  z-index: 2;
  margin: auto;
}

#navbar ul li {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-size: 1.2rem;
  margin-right: 50px;
}

#navbar ul li a {
  position: relative;
  text-decoration: none;
  font-family: "PT Serif", serif;
  color: black;
  transition: 0.6s;
}

.active {
  color: #1cd6ce !important;
}

#navbar ul li a::after {
  content: "";
  position: absolute;
  background-color: black;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.5px;
}

#navbar ul li a:hover::after {
  transform: scale(1);
  transform-origin: left;
}

/** Navbar Login Button */
#ndb {
  margin-right: 50px;
}

#navbar button {
  display: inline-block;
  position: relative;
  background: transparent;
  text-decoration: none;
  font-family: "PT Serif", serif;
  font-size: 14px;
  font-weight: 500;
  border-radius: 23px;
  color: black;
  border: 2px solid black;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  transition: all 0.35s;
  width: 82px;
  height: 32px;
}

#navbar button:after {
  position: absolute;
  content: "";
  background: var(--accent-color);
  transition: all 0.35s;
  z-index: -1;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
}

#navbar button:hover {
  color: #fff;
  border: 0px solid var(--accent-color) !important;
  transform: scale(1.05);
}

#navbar button:hover:after {
  width: 100%;
}

#navbar button a {
  text-decoration: none;
  font-family: "PT Serif", serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  color: black;
}

nav.sticky {
  background-color: #202124;
  opacity: 0.95;
  padding: 5px 50px;
  height: 60px !important;
}

nav.sticky #logo {
  color: #fff;
}
nav.sticky #nav-a {
  color: #fff;
}

nav.sticky #nav-btn,
nav.sticky #navbar button:focus {
  color: #fff;
  border: 2px solid #fff;
}

nav.sticky #navbar button:hover {
  color: #000000;
  border: 5px solid black;
}

nav.sticky #nav-btn-a {
  color: #fff !important;
  text-decoration: none;
  font-family: "PT Serif", serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
}

nav.sticky #nav-a::after {
  content: "";
  position: absolute;
  background-color: #fff;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.5px;
}

nav.sticky #nav-a:hover::after {
  transform: scale(1);
  transform-origin: left;
}




`