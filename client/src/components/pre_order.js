import React, { useState } from "react";
import useForm from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

function PreOrder() {
  const { register, errors, handleSubmit } = useForm();
  const [payment, setPayment] = useState("aba");
  const [size, setSize] = useState("size S");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000
  });

  const handlePayment = e => {
    setPayment(e.target.value);
  };

  const handleSizeChange = e => {
    setSize(e.target.value);
  };

  const onSubmit = data => {
    console.log(data);
    axios
      .post("http://localhost:4401/api/form", { ...data })
      .then(e => {
        Toast.fire({
          type: "success",
          title: "Thank you for your order. Please, check your email."
        });
      })
      .catch(e => {
        if (e.response.status === 404) {
          Toast.fire({
            type: "error",
            title: "Sorry, Please try again."
          });
        }
      });
  };

  return (
    <React.Fragment>
      <div className="pre_order_background">
        <div className="pre_order_image"> </div>
        <div className="ui container">
          <center>
            <h1 className="order_title">Pre-Order Form</h1>
          </center>
          <form
            className="ui form segment preorder_width"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="two fields">
              <div className="field">
                <input
                  placeholder="First Name"
                  name="fname"
                  className="form_input"
                  type="text"
                  ref={register({ required: true, maxlength: 20 })}
                />
                {errors.fname && (
                  <p className="error_message">First Name is required</p>
                )}
              </div>
              <div className="field">
                <input
                  placeholder="Last Name"
                  name="lname"
                  className="form_input"
                  type="text"
                  ref={register({ required: true, maxlength: 20 })}
                />
                {errors.lname && (
                  <p className="error_message">Last Name is required</p>
                )}
              </div>
            </div>
            <div className="two fields">
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
                  <p className="error_message">Email is required</p>
                )}
              </div>

              <div className="field">
                <input
                  placeholder="Phone Number"
                  type="number"
                  className="form_input"
                  name="phone_number"
                  ref={register({ required: true, minLength: 8 })}
                />
                {errors.phone_number && (
                  <p className="error_message">Phone Number is required</p>
                )}
              </div>
            </div>
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
                    ref={register({ required: true })}
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
                    ref={register({ required: true })}
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
                    ref={register({ required: true })}
                  />
                  <label>Other</label>
                </div>
              </div>
            </div>
            <textarea
              className="form_textarea"
              rows="4"
              name="message"
              placeholder="Message"
              ref={register({ required: false })}
            ></textarea>
            <br /> <br />
            <center>
              <button className="ui primary submit button" type="submit">
                Submit Now
              </button>
            </center>
            <br /> <br />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PreOrder;
