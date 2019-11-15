import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import WhatPage from "./components/what_page";
import WhyPage from "./components/why_page";
import PreOrder from "./components/pre_order";
import Footer from "./components/footer";
import GroodPP from "./components/grood_pp";
import GroodKit from "./components/grood_kit";

function App() {
  const [background, setBackground] = useState("#1d3c27");
  const changeToBlack = () => {
    setBackground("#303030");
  };
  const changeToDarkGreen = () => {
    setBackground("#1d3c27");
  };
  return (
    <div className="App">
      <Navbar background={background} />
      <Banner />
      <WhatPage />
      <GroodPP />
      <GroodKit />
      <WhyPage />
      <PreOrder background={background} />
      <Footer
        background={background}
        changeToBlack={changeToBlack}
        changeToDarkGreen={changeToDarkGreen}
      />
    </div>
  );
}

export default App;
