import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  );
};

export default App;
