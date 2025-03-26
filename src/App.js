import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <AppRouter />
      <Footer />
    </Router>
  );
};

export default App;
