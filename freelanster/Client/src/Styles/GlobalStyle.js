import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
img{
user-select: none;
}
button{
cursor: pointer;
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

/*--------------------------------------------CSS FOR PROGRASSBAR-------------------------------------------------------------------- */
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
}

`