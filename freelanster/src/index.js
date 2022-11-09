import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './Styles/GlobalStyle';
import "swiper/css/bundle";
import Routing from './Routing'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <GlobalStyle />

    <Routing />

  </>

);