import React from "react";
import "./Mainbody.css";
import banner from "./banner-img.png";

export default function Mainbody() {
  return (
    <div>
      <div className="bodymain">
        <div className="left1">
          <div className="p1">
            <h1>Scale Design & Dev</h1>
            <h1>Opertaions with</h1>
            <h1> Avocode Enterprise</h1>
          </div>
          <div className="p2">
            <p>
              A fully integrated suite of authentication & authoriz products,
              Stytch's
            </p>
            <p>Platform removes the headache of.</p>
          </div>
          <div className="but1">
            <button>
              <b>Download The Theme</b>
            </button>
          </div>
        </div>
        <div className="right1">
          <img src={banner} alt="logo" />
        </div>
      </div>
      {/* ******************************************************** */}
      <div className="container2-highlight">
        <div className="both-same">
          <div class="left-class-easier">
            <p class="payroll">The Highlighting Part</p>
            <p class="wow">Of Our Solution.</p>
          </div>
          <div class="right-class-content">
            <p class="milzo">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit.
            </p>
            <p className="dilo">
              Morbi egestas Werat viverra id et aliquet vulputate egestas
              sollicitudin .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
