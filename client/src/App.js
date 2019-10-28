import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import WhatPage from "./components/what_page";
import WhyPage from "./components/why_page";
import PreOrder from "./components/pre_order";
import Footer from "./components/footer";

function App() {
  const [background, setBackground] = useState("#303030");
  return (
    <div className="App">
      <Navbar background={background} />
      <Banner background={background} />
      <WhatPage background={background} />
      <WhyPage background={background} />
      <PreOrder background={background} />
      <Footer background={background} />
    </div>
  );
}

export default App;
