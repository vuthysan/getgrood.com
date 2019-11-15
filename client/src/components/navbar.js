import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar(props) {
  const [navbarToggle, setNavbarToggle] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarToggle(!navbarToggle);
  };
  return (
    <React.Fragment>
      <div className="home_page_navbar">
        <div
          className="ui secondary menu fixed"
          style={{ backgroundColor: props.background }}
        >
          <div
            className={
              navbarToggle ? "mobile_back ui container" : "ui container"
            }
          >
            <Link
              className="logo"
              to="banner_ride"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <img alt="grood" src="/image/grood-w.png" />
            </Link>
            <div className="right menu">
              <Link
                className="active item web_menu_list"
                to="what_page_background_color"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                What's Grood?
              </Link>
              <Link
                className="item web_menu_list"
                to="grood_kit_page"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Grood Kit
              </Link>
              <Link
                className="item web_menu_list"
                to="why_section"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                For Greater Good
              </Link>

              <Link
                className="item listbtn "
                to="pre_order_background"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <button
                  className="insize ui button preOrderBtn"
                  style={{ color: props.background }}
                >
                  Pre-Order Now
                </button>
              </Link>
              <img
                alt="grood"
                src={navbarToggle ? "/image/close.png" : "/image/menu.png"}
                className="phone_menu"
                onClick={handleNavbarToggle}
              />
            </div>
          </div>

          <div
            className={
              navbarToggle
                ? "ui left demo vertical visible sidebar labeled icon menu"
                : "ui left demo vertical sidebar labeled icon menu"
            }
          >
            <Link
              className="item"
              to="what_page_background_color"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              What's Grood?
            </Link>
            <Link
              className="item"
              to="grood_kit_page"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Grood Kit
            </Link>
            <Link
              className="item"
              to="why_section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              For Greater Good
            </Link>

            <Link
              className="item "
              to="pre_order_background"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Pre-Order Now
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
