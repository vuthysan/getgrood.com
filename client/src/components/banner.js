import React from "react";
import { Link } from "react-scroll";

function Banner() {
  return (
    <div className="ui container">
      <div className="banner_ride">
        <div className="ridebike">
          <div className="ride">
            <div className="banner">
              <h2 className="mybike">Ride Grood For</h2>
              <h3 className="better">Better world</h3>
              <p>
                Grood is Cambodia’s best brand of electric bikes because we put
                people first. The most important part of every Grood isn’t some
                high-tech gadget or fancy bicycle component – it’s the person
                riding it. Producing great eBikes is just the beginning. To be
                truly great, a company has to stand for something… Grood stands
                for you.
              </p>
              <Link
                className="item web_menu_list"
                to="groodPP"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <button className="insize ui button preOrderBtn">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="banner_image">
              <img
                alt="grood"
                src={"./image/grood_bike.png"}
                className="ui fluid image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
