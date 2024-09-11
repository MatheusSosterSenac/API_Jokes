import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Inicial from "./pages/Home"; 
import About from "./pages/About";
import Liberty from "./pages/Liberty";
import Comedians from "./pages/Comedians";
import Jokes from "./pages/JokeApi";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicial  />} />
            <Route path="/about" element={<About />} />
            <Route path="/liberty" element={<Liberty />} />
            <Route path="/comedians" element={<Comedians/>} />
            <Route path="/jokes" element={<Jokes/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

