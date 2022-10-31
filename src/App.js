import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import React, { createContext } from "react";
import UserGallery from "./Components/user/UserGallery";
import Index from "./Components/user/index";
// import Details from './Components/user/Details';
import Appbar from "./Components/Navbar/Appbar";
// import UserRev from './Components/Navbar/UserRev';
import Home from "./Components/Navbar/Home";
import UserMobile from "./Components/user/userMain";
import Detail from "./Components/user/Detail";
import MainTaskDetal from "./Components/task/MainTaskDetal";
import MainTaskGallery from "./Components/task/Maintaskgallery";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";
import { apiState } from "./Atoms/Atom";
import { apitask } from "./Atoms/Atom";
import Settings from "./Atoms/Setting/Settings";
// const Link = createContext();

// const apiState = atom({
//   key:"uAPI",
//   default:`https://taskmanagementtodo.herokuapp.com/api/users?`
// })
// const userAPI = `https://taskmanagementtodo.herokuapp.com/api/users?`;
// const taskAPI = `https://taskmanagementtodo.herokuapp.com/api/tasks?`;

const App = () => {
  const [api, setUapi] = useRecoilState(apiState);
  const [tAPI, setTapi] = useRecoilState(apitask);

  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserMobile />} />
        <Route path="/tasks" element={<MainTaskGallery />} />
        <Route path="/users/:id" element={<Detail />} />
        <Route path="/tasks/:id" element={<MainTaskDetal />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
