import React from "react";
import { Routes, Route} from 'react-router-dom';
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import Inicial from "./pages/Home"; 
import About from "./pages/About";
import Liberty from "./pages/Liberty";
import Comedians from "./pages/Comedians";
import Jokes from "./pages/JokeApi";
import Profile from "./pages/Profile";
import { AuthProvider } from './auth/context';
import { ToastContainer } from "react-toastify";


function App() {
  return (
        <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Inicial/>} />
          <Route path="/about" element={<About />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/liberty" element={<Liberty />} />
          <Route path="/comedians" element={<Comedians />} />
          <Route path="/profiles" element={<Profile />} />
        </Routes>
        <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: '50%' }}
      />
      <Footer />  
      </AuthProvider>  
  );
}

export default App
