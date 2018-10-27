import React, { Component } from "react";
import "./contact.css";

export class ContactUs extends Component {
  render() {
    return (
      <div>
        <svg
          id="get-in-touch"
          class="child"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          viewBox="0 0 100.85 99.84"
        >
          <g id="headset">
            <path
              class="cls-1"
              d="M31.69,77.64,22.81,80a6.64,6.64,0,0,1-6.65-6.64V60.88a6.64,6.64,0,0,1,6.65-6.64l8.88,2.34Z"
              transform="translate(-0.06 -0.08)"
            />
            <path
              class="cls-1"
              d="M69.39,77.64,78.27,80a6.64,6.64,0,0,0,6.65-6.64V60.88a6.64,6.64,0,0,0-6.65-6.64l-8.88,2.34Z"
              transform="translate(-0.06 -0.08)"
            />
            <rect
              class="cls-1"
              x="37.84"
              y="89.19"
              width="19.25"
              height="9.4"
              rx="3.83"
              ry="3.83"
            />
            <path
              class="cls-1"
              d="M74.8,43.23H69.88a3.71,3.71,0,0,1-3-1.58,20.1,20.1,0,0,0-32.78,0,3.67,3.67,0,0,1-3,1.57H26.16"
              transform="translate(-0.06 -0.08)"
            />
            <path
              class="cls-1"
              d="M76.28,78.08v-27a25.8,25.8,0,0,0-25.79-25.8h0a25.8,25.8,0,0,0-25.8,25.8v30A12.89,12.89,0,0,0,37.57,94h0"
              transform="translate(-0.06 -0.08)"
            />
          </g>
          <g id="lines">
            <line
              id="line1-1"
              class="cls-1"
              x1="6.06"
              y1="58.8"
              x2="9.6"
              y2="58.18"
            />
            <circle id="line1-2" class="cls-2" cx="1.31" cy="59.64" r="1.31" />
            <line
              id="line2-1"
              class="cls-1"
              x1="12.53"
              y1="44.3"
              x2="15.35"
              y2="44.8"
            />
            <line
              id="line2-2"
              class="cls-1"
              x1="1.38"
              y1="42.33"
              x2="7.02"
              y2="43.33"
            />
            <line
              id="line3-1"
              class="cls-1"
              x1="11.37"
              y1="28.43"
              x2="19.65"
              y2="33.21"
            />
            <circle id="line3-2" class="cls-2" cx="7.23" cy="26.04" r="1.31" />
            <line
              id="line4"
              class="cls-1"
              x1="18.37"
              y1="12.78"
              x2="27.58"
              y2="23.76"
            />
            <line
              id="line5-1"
              class="cls-1"
              x1="35"
              y1="8.61"
              x2="38.27"
              y2="17.58"
            />
            <circle id="line5-2" class="cls-2" cx="33.37" cy="4.12" r="1.31" />
            <line
              id="line6-1"
              class="cls-1"
              x1="50.42"
              y1="12.58"
              x2="50.42"
              y2="15.44"
            />
            <line
              id="line6-2"
              class="cls-1"
              x1="50.42"
              y1="1.25"
              x2="50.42"
              y2="6.98"
            />
            <line
              id="line7-1"
              class="cls-1"
              x1="62.58"
              y1="17.58"
              x2="65.84"
              y2="8.61"
            />
            <circle id="line7-2" class="cls-2" cx="67.48" cy="4.12" r="1.31" />
            <line
              id="line8"
              class="cls-1"
              x1="73.27"
              y1="23.76"
              x2="82.48"
              y2="12.78"
            />
            <line
              id="line9-1"
              class="cls-1"
              x1="81.2"
              y1="33.21"
              x2="89.51"
              y2="28.42"
            />
            <circle id="line9-2" class="cls-2" cx="93.61" cy="26.04" r="1.31" />
            <line
              id="line10-1"
              class="cls-1"
              x1="88.31"
              y1="44.3"
              x2="85.49"
              y2="44.8"
            />
            <line
              id="line10-2"
              class="cls-1"
              x1="99.47"
              y1="42.33"
              x2="93.82"
              y2="43.33"
            />
            <line
              id="line11-1"
              class="cls-1"
              x1="91.14"
              y1="58.16"
              x2="94.79"
              y2="58.8"
            />
            <circle
              id="line11-2"
              class="cls-2"
              cx="99.54"
              cy="59.64"
              r="1.31"
            />
          </g>
        </svg>

        <div class="inner contact container">
          <div class="contact-form">
            <div class="col-xs-6 wow animated slideInLeft" data-wow-delay=".5s">
            <input
                type="text"
                name="subject"
                id="subject"
                required="required"
                class="form"
                placeholder="Name"
              />

              <input
                type="email"
                name="mail"
                id="mail"
                required="required"
                class="form"
                placeholder="Email"
              />

              <input
                type="text"
                name="subject"
                id="subject"
                required="required"
                class="form"
                placeholder="Subject"
              />
            </div>
            <div
              class="col-xs-6 wow animated slideInRight"
              data-wow-delay=".5s"
            >
              <textarea
                name="message"
                id="message"
                class="form textarea"
                placeholder="Message"
              />
            </div>
            <div class="relative fullwidth col-xs-12">
              <button
                type="submit"
                id="submit"
                name="submit"
                class="form-btn semibold"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
