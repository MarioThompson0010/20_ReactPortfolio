import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (

    <Router>
      <div className="container">
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/20_ReactPortfolio" component={About}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer classguy="col-12 d-flex justify-content-center mt-5 mb-5" />
      </div>
    </Router>
  );
}

export default App;
