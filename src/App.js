import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
