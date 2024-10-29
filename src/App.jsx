import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import Inicial from "./pages/Home"; 
import About from "./pages/About";
import Liberty from "./pages/Liberty";
import Comedians from "./pages/Comedians";
import Jokes from "./pages/JokeApi";

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/"; 
  const isRegisterPage = location.pathname === "/register"; 
  const isAdminPage = location.pathname === "/admin";

  return (
    <>
      {!isLoginPage || !isRegisterPage || !isAdminPage || <Header />} 
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/home" element={<Inicial />} />
          <Route path="/about" element={<About />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/liberty" element={<Liberty />} />
          <Route path="/comedians" element={<Comedians />} />
        </Routes>
      </main>
      {!isLoginPage || !isRegisterPage || !isAdminPage || <Footer />} 
    </>
  );
}

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
