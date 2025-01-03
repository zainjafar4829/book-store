import { BrowserRouter, Routes, Route } from "react-router"; // Use react-router
import React from "react";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route */}
        <Route path="/" element={<App />}>
          {/* Child routes */}
          <Route index element={<Home />} /> {/* Default child route */}
          <Route path="dashboard" element={<Home />} />
          <Route path="orders" element={<h1>This is orders page</h1>} />
          <Route path="about" element={<h1>This is about page</h1>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<h1>This is no content found page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
