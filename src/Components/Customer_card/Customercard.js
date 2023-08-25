import React from "react";
import "./Customercard.css";
import user_6 from "./user-6.png";
import { AiTwotoneStar } from "react-icons/ai";

export default function Customercard() {
  return (
    <div>
      <div className="container-6-front-text">
        <div className="noble">
          <div class="klyoe">
            <p class="dolop">Our customers have nice </p>
            <p class="parrot">things to say about us</p>
          </div>
          <div class="canny-box-desgining">
            <p class="yolpou">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="sim">
              Morbi egestas Werat viverra id et aliquet vulputate egestas
              sollicitudin .
            </p>
          </div>
        </div>
      </div>
      {/* ********************************************************* */}
      <div className="container-7-card-part">
        <div className="main-card-srction-front">
          <div className="first-card-henery">
            <img src={user_6} alt="logo" className="men"></img>
            <p className="richards">Ronald Richards</p>
            <p className="natural">meta limited</p>
            <p className="phone-text">
              Our platfrom help build secure onbording authentication
              experiences & engage your user . We build
            </p>
            <div className="star-all">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar id="dark-icon" />
            </div>
          </div>
          <div className="first-card-henery">
            <img src={user_6} alt="logo" className="white-plio"></img>
            <p className="richards">Ronald Richards</p>
            <p className="natural">meta limited</p>
            <p className="phone-text">
              Our platfrom help build secure onbording authentication
              experiences & engage your user . We build
            </p>
            <div className="star-all">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar id="dark-icon" />
            </div>
          </div>
          <div className="first-card-henery">
            <img src={user_6} alt="logo" className="men"></img>
            <p className="richards">Ronald Richards</p>
            <p className="natural">meta limited</p>
            <p className="phone-text">
              Our platfrom help build secure onbording authentication
              experiences & engage your user . We build
            </p>
            <div className="star-all">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar id="dark-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
