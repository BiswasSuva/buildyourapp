import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../view/Authentication/Login";
import Register from "../view/Authentication/Register";
import Home from "../view/Home";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicRoutes() {

  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>404 not found</h1>}/>
    </Routes>
  );
}

export default PublicRoutes;
