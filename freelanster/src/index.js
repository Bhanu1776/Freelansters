import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css/bundle";
import App from './App';
// import About from './Components/About';
import Login from './Login';
// import FindJobs from './FindJobs';
import Profile from './Components/Profile';
// import Error from './Components/Error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route path='/Home' element={<App />}></Route>
        <Route path='Login' element={<Login />}></Route>
        {/* <Route path='/FindJobs' element={<FindJobs />}></Route> */}
        {/* <Route path='*' element={<Error />}></Route> */}
        {/* <Route path='/About' element={<About />}></Route> */}
        <Route path='/Profile' element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>

    {/* <App /> */}
    {/* <Login /> */}

    {/* <FindJobs /> */}

    {/* <Error /> */}
  </>

);
