import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import WhatPage from "./components/what_page";
import WhyPage from "./components/why_page";
import PreOrder from "./components/pre_order";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <WhatPage />
      <WhyPage />
      <PreOrder />
      <Footer />
    </div>
  );
}

export default App;
