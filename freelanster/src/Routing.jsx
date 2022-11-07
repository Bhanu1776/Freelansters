import React, { createContext, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initialState, reducer } from "./reducer/UseReducer";
import App from "./App";
import Login from "./Login";
import FindJobs from "./FindJobs";
import Logout from "./Components/Logout";
import FindFreelancer from "./FindFreelancer";
import Error from "./Components/Error";
import PostJobs from "./Components/PostJobs";
import SingleJob from "./Components/SingleJob";
// import Profile from './Components/Profile';

// Context API
export const UserContext = createContext();

const Paths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route path="/Home" element={<App />}></Route>
      <Route path="/Home/Login" element={<Login />}></Route>
      <Route path="Login" element={<Login />}></Route>
      <Route path="/FindJobs" element={<FindJobs />}></Route>
      <Route path="/FindJobs/:id" element={<SingleJob />}></Route>
      <Route path="/FindJobs/Logout" element={<Logout />}></Route>
      <Route path="/FindJobs/Home" element={<App />}></Route>
      <Route path="/FindJobs/PostJobs" element={<PostJobs />}></Route>
      <Route path="/PostJobs" element={<PostJobs />}></Route>
      <Route path="/FindFreelancer" element={<FindFreelancer />}></Route>
      <Route path="/FindFreelancer/Login" element={<Login />}></Route>
      <Route path="/FindFreelancer/Home" element={<App />}></Route>
      <Route path="/FindFreelancer/Logout" element={<Logout />}></Route>
      {/* <Route path='/Profile' element={<Profile />}></Route> */}
      <Route path="/Logout" element={<Logout />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};

const Routing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Paths />
        </BrowserRouter>
      </UserContext.Provider>

      {/* <App /> */}
      {/* <Login /> */}

      {/* <FindJobs /> */}
      {/* <FindFreelancer/> */}
      {/* <PostJobs /> */}

      {/* <Error /> */}
    </>
  );
};

export default Routing;
