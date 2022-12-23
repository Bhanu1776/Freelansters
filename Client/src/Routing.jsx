import React, { createContext, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initialState, reducer } from "./reducer/UseReducer";
import App from "./App";
import Login from "./Login";
import FindJobs from "./FindJobs";
import Logout from "./Components/Logout";
import Error from "./Components/Error";
import PostJobs from "./Components/PostJobs";
import SingleJob from "./Components/SingleJob";
import Profile from "./Components/Profile";
import GetHired from "./Components/GetHired";
import FindFreelancer from "./FindFreelancer";

// const App = lazy(() => import("./App"));
// const Login = lazy(() => import("./Login"));
// const Error = lazy(() => import("./Components/Error"));
// const PostJobs = lazy(() => import("./Components/PostJobs"));
// const SingleJob = lazy(() => import("./Components/SingleJob"));
// const Profile = lazy(() => import("./Components/Profile"));
// const GetHired = lazy(() => import("./Components/GetHired"));

// Context API
export const UserContext = createContext();

const Paths = () => {
  return (
    // <Suspense fallback={<h1> </h1>}>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route exact path="/Logout" element={<Logout />}></Route>
      <Route path="/Home" element={<App />}></Route>
      <Route exact path="/Login1" element={<Login />}></Route>
      <Route path="/Home/Login1" element={<Login />}></Route>
      <Route path="/Home/Logout" element={<Logout />}></Route>
      <Route path="Login" element={<Login />}></Route>
      <Route path="/FindJobs" element={<FindJobs />}></Route>
      <Route path="/FindJobs/:id" element={<SingleJob />}></Route>
      <Route path="/FindJobs/Profile" element={<Profile />}></Route>
      <Route path="/FindJobs/Profile/Home" element={<App />}></Route>
      <Route path="/FindJobs/Logout" element={<Logout />}></Route>
      <Route path="/FindJobs/Home" element={<App />}></Route>
      <Route path="/FindJobs/PostJobs" element={<PostJobs />}></Route>
      <Route path="/FindFreelancer" element={<FindFreelancer />}></Route>
      <Route path="/FindFreelancer/Login" element={<Login />}></Route>
      <Route path="/FindFreelancer/Home" element={<App />}></Route>
      <Route path="/FindFreelancer/GetHired" element={<GetHired />}></Route>
      <Route path="/FindFreelancer/Profile" element={<Profile />}></Route>
      <Route path="/FindFreelancer/Profile/Home" element={<App />}></Route>
      <Route path="/FindFreelancer/Logout" element={<Logout />}></Route>

      <Route path="/Logout" element={<Logout />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
    // </Suspense>
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
    </>
  );
};

export default Routing;
