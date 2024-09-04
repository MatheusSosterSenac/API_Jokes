import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import Inicial from "./pages/Home"; 

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicial  />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

