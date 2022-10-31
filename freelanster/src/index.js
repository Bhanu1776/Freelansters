import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css/bundle";
import { GlobalStyle } from './Styles/GlobalStyle';
import App from './App';
// import About from './Components/About';
import Login from './Login';
import FindJobs from './FindJobs';
// import Profile from './Components/Profile';
import Logout from './Components/Logout';

import FindFreelancer from './FindFreelancer';
// import Error from './Components/Error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route path='/Home' element={<App />}></Route>
        <Route path='Login' element={<Login />}></Route>
        <Route path='/FindJobs' element={<FindJobs />}></Route>
        {/* <Route path='/About' element={<About />}></Route> */}
        {/* <Route path='/Profile' element={<Profile />}></Route> */}
        <Route path='/Logout' element={<Logout />}></Route>
        <Route path='/FindFreelancer' element={<FindFreelancer />}></Route>
      </Routes>
    </BrowserRouter>

    {/* <App /> */}
    {/* <Login /> */}

    {/* <FindJobs /> */}
  </>

);
