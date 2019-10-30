import React from "react";

function Footer(props) {
  console.log(props);

  return (
    <center>
      <div className="footer" style={{ backgroundColor: props.background }}>
        <div className="ui container">
          <div className="ui stackable two column grid">
            <div className="column">
              <img
                alt="grood"
                src="./image/grood-w.png"
                className="footer_image"
              />
            </div>
            <div className="column">
              <div className="under_footer">
                <p>
                  Make with <img alt="grood" src="/image/heart-30.png" /> by
                  SmallWorld Venture
                </p>
                <p className="copyright">&#169; 2019 All Rights Reserved</p>

                <div className="changeColorDiv">
                  <div
                    className="blackColor"
                    onClick={props.changeToBlack}
                  ></div>
                  <div
                    className="darkGreenColor"
                    onClick={props.changeToDarkGreen}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Footer;
