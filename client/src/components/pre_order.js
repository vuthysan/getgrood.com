import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-scroll";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000
});

function PreOrder(props) {
  const { register, errors, handleSubmit } = useForm();
  const [payment, setPayment] = useState("aba");
  const [size, setSize] = useState("size S");
  const [choice, setChoice] = useState("grood_electric_bike");

  const handleChoice = e => {
    setChoice(e.target.value);
  };

  const handlePayment = e => {
    setPayment(e.target.value);
  };

  const handleSizeChange = e => {
    setSize(e.target.value);
  };

  console.log(choice);

  const onSubmit = data => {
    // console.log(data);
    // https://mail.getgrood.com/api/form
    axios.post("http://localhost:4401/api/form", { ...data }).then(() => {
      Toast.fire({
        type: "success",
        title: "Thank you for your order. Please, check your email."
      });
    });
  };

  const GroodSize_And_Payment = () => {
    return (
      <React.Fragment>
        {/* ============ Grood Size ============ */}
        <div className="grouped fields">
          <p className="pre_order_label">
            Which size of Grood do you want to have?
          </p>

          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="size"
                value="size S"
                checked={size === "size S"}
                onChange={handleSizeChange}
                ref={register({ required: true })}
              />
              <label>Size S (Dark Blue)</label>
            </div>
          </div>

          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="size"
                value="size M"
                checked={size === "size M"}
                onChange={handleSizeChange}
                ref={register({ required: true })}
              />
              <label>Size M (Green)</label>
            </div>
          </div>
        </div>
        {/* ============ Payment ============ */}
        <div className="grouped fields">
          <p className="pre_order_label">How will you pay to Grood?</p>

          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="payment"
                value="aba"
                checked={payment === "aba"}
                onChange={handlePayment}
                ref={
                  choice === "grood_electric_bike"
                    ? register({ required: true })
                    : ""
                }
              />
              <label>ABA</label>
            </div>
          </div>

          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="payment"
                value="wing"
                checked={payment === "wing"}
                onChange={handlePayment}
                ref={
                  choice === "grood_electric_bike"
                    ? register({ required: true })
                    : ""
                }
              />
              <label>WING</label>
            </div>
          </div>

          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="payment"
                value="other"
                checked={payment === "other"}
                onChange={handlePayment}
                ref={
                  choice === "grood_electric_bike"
                    ? register({ required: true })
                    : ""
                }
              />
              <label>Other</label>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="pre_order_background">
        <Link
          to="pre_order_background"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src="/image/sales.png" alt="" className="discount_image" />
        </Link>

        {/* <div className="pre_order_grood_bike_image">
          <img
            src={
              choice === "grood_electric_bike"
                ? "/image/grood_ebike.png"
                : "/image/grood_kit.png"
            }
            alt="grood"
            srcset=""
          />
        </div> */}
        <div className="pre_order_image"> </div>
        <div className="ui container">
          <center>
            <h1 className="order_title">GROOD Pre-Sale</h1>
            <p className="order_desc">
              Thank you for interested in what we do. Let's get started. We have
              you also feel GROOD too after filling up the form below. We will
              be in touch with you soon.
            </p>
          </center>
          <form
            className="ui form segment preorder_width"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="two fields">
              <div className="field">
                <input
                  placeholder="Grood's Owner Name"
                  name="fname"
                  className="form_input"
                  type="text"
                  ref={register({ required: true, maxlength: 20 })}
                />
                {errors.fname && (
                  <p className="error_message">
                    Grood's Owner Name is required
                  </p>
                )}
              </div>
              <div className="field">
                <input
                  placeholder="Email Address"
                  type="email"
                  className="form_input"
                  name="email"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="error_message">Email Address is required</p>
                )}
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <input
                  placeholder="Phone Number "
                  type="number"
                  className="form_input"
                  name="phone_number"
                  ref={register({ required: true, minLength: 8 })}
                />
                {errors.phone_number && (
                  <p className="error_message">Phone Number is required</p>
                )}
              </div>

              <div className="field">
                <select
                  className="ui dropdown"
                  onChange={handleChoice}
                  name="buy"
                  ref={register({ required: true, minLength: 8 })}
                >
                  <option value="grood_electric_bike">
                    GROOD Electric Bike (Price: $513)
                  </option>
                  <option value="conversion_kit">
                    Conversion Kit (Price: $351)
                  </option>
                </select>
              </div>
            </div>
            {choice === "grood_electric_bike" ? GroodSize_And_Payment() : ""}
            <textarea
              className="form_textarea"
              rows="4"
              name="message"
              placeholder="Message"
              ref={register({ required: true })}
            ></textarea>
            {errors.message && (
              <p className="error_message">Message is required</p>
            )}
            <br /> <br />
            <center>
              <button
                className="ui button submitBtn"
                type="submit"
                style={{ backgroundColor: props.background }}
              >
                Submit Now
              </button>
            </center>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PreOrder;
