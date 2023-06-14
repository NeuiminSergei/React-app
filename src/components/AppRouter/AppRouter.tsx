import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../../pages/About/About";
import Posts from "../../pages/Posts/Posts";
import { NonExistent } from "../../pages/NonExistent/NonExistent";
import { PostPage } from "../../pages/PostPage/PostPage";
import { Login } from "../../pages/Login/Login";
import { Main } from "../../pages/Main/Main";

export function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/posts' element={<Posts />}></Route>
      <Route path='/posts/:id' element={<PostPage />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NonExistent />} />
    </Routes>
  )
}