import React, { Fragment } from "react";

function WhatPage() {
  return (
    <Fragment>
      <div className="what_page_background_color">
        <div className="ui container">
          <div className="whatgrood">
            <h1 className="titlesize">
              What's<span className="hh2"> Grood</span>?
            </h1>
            <p>
              An electric bike is equipped with a motor and a battery. To make
              pedaling easier, the engine starts automatically when you pedal
              (and switch off when pedaling stops). To recharge the battery, it
              plugs home at a conventional power outlet.
            </p>
          </div>
          <div className="imagestyle">
            <center>
              <img
                alt="grood"
                src="./image/Kits-With-Bike.png"
                className="ui fluid image"
              />
            </center>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WhatPage;
