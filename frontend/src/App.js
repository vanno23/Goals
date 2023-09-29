import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
