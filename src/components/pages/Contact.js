import React from "react";
import "../../App.css";
import "./Contact.css";
import imgContact from "../../resources/images/img-01.png";
export default function Contact() {
  return (
    <div className="contact-info">
      <div className="contact-container">
        <div class="contact-pic js-tilt" data-tilt>
          <img src={imgContact} alt="IMG" />
        </div>

        <form class="contact-form validate-form">
          <span class="contact-form-title">Contact US</span>
          <div
            class="wrap-input validate-input"
            data-validate="Name is required"
          >
            <input class="input" type="text" name="name" placeholder="Name" />
            <span class="shadow-input"></span>
          </div>

          <div
            class="wrap-input validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input class="input" type="text" name="email" placeholder="Email" />
            <span class="shadow-input"></span>
          </div>

          <div
            class="wrap-input validate-input"
            data-validate="Subject is required"
          >
            <input
              class="input"
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <span class="shadow-input"></span>
          </div>

          <div
            class="wrap-input validate-input"
            data-validate="Message is required"
          >
            <textarea
              class="input"
              name="message"
              placeholder="Message"
            ></textarea>
            <span class="shadow-input"></span>
          </div>

          <div class="container-contact-form-btn">
            <button class="contact-form-btn">
              <span>
                Send Email
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
