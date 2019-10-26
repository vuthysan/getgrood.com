import React from "react";

function WhyPage() {
  return (
    <React.Fragment>
      <div className="why_section"></div>
      <div className="ui container">
        <div className="whygrood">
          <div className="title">
            <h1 className="titlesize">
              Why's <span className="hh2"> Grood</span>
              <span>?</span>
            </h1>
            <p className="why_section_desc">
              Grood bikes can effortlessly reach a speed of 32km/h, easily climb
              the coast or make trips that would be too long to travel with a
              conventional bike.
            </p>
          </div>
          <center>
            <div className="ui stackable three column grid">
              <div className="column">
                <img alt="grood" src="./image/bike-b.png" />
                <h1 className="eco">Lithium Battery</h1>
                <p className="why_section_subtitle">1000 cycles of charge</p>
              </div>
              <div className="column">
                <img alt="grood" src="./image/battery.png" />
                <h1 className="eco">Range Battery</h1>
                <p className="why_section_subtitle">40km average</p>
              </div>
              <div className="column">
                <img alt="grood" src="./image/spped.png" />
                <h1 className="eco">Speed</h1>
                <p className="why_section_subtitle">32km/h</p>
              </div>
            </div>
          </center>

          <h2 className="why_section_title">
            When you buy a GROOD, you're investing in:
          </h2>

          <center>
            <div className="ui stackable three column grid">
              <div className="column">
                <img alt="grood" src="./image/1yearw.png" />
                <h1 className="invest_section_title">
                  The peace of mind of an indestry leading one year warranty
                </h1>
              </div>
              <div className="column">
                <img alt="grood" src="./image/local-cop.png" />
                <h1 className="invest_section_title">Local Compnay</h1>
              </div>
              <div className="column">
                <img alt="grood" src="./image/customer-care.png" />
                <h1 className="invest_section_title">
                  Friendly customer care that goes the extra mile
                </h1>
              </div>
            </div>
          </center>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WhyPage;
