import React from "react";

function GroodPP() {
  return (
    <React.Fragment>
      <div className="groodPP">
        <div className="ui container">
          <div className="whygrood">
            <div className="title">
              <h1 className="titlesize">
                <span className="hh2">Grood </span>
                <span>Phnom Penh</span>
              </h1>
              <p className="why_section_desc">
                Hit the streets and traffic jams with this top-notch city bike.
                Phnom Penh front and rear alloy brakes, a Shimano 6-speed
                drivetrain, and RevoShift grip shifters for safety, precision,
                and total control. Includes fenders and rear rack, wheels size
                700x35C.
              </p>
              <div className="grood_pp_image_background">
                <center>
                  <img
                    src="/image/bike.png"
                    alt="grood"
                    className="ui big image"
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <div className="what_page_background_color">
          <div className="ui container">
            <div className="whatgrood">
              <h1 className="titlesize">
                <span className="hh2">Features</span>
              </h1>
            </div>
            <div class="ui stackable two column grid featureTable">
              <div class="column">
                <img
                  src="/image/kid-grood.png"
                  alt=""
                  className="ui fluid image featureImg"
                />
              </div>
              <div class="column">
                <table class="ui striped table">
                  <tbody>
                    <tr>
                      <td>City Bike Mode</td>
                      <td>Phnom Penh</td>
                    </tr>
                    <tr>
                      <td>Rear Hub Motor</td>
                      <td>36V 350W Brushless gear Hub Motor</td>
                    </tr>
                    <tr>
                      <td>Display</td>
                      <td>LCD display</td>
                    </tr>
                    <tr>
                      <td>PAS</td>
                      <td>12 Magnets Pedal Assistant Sensor.</td>
                    </tr>
                    <tr>
                      <td>Battery</td>
                      <td>Water bottle shape 36v 7ah</td>
                    </tr>
                    <tr>
                      <td>Charger</td>
                      <td>36v</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
}

export default GroodPP;
