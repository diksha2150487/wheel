import React from "react";
import "./Knowuscard.css";
import intro from "./intro-thumbnail.png";
import collab from "./collaboration - Copy.png";
import fire from "./fire.png";
import red from "./red-part.png";
import life from "./lfe-view.png";
// import sells from "./sells-by-country.png";

export default function Knowuscard() {
  return (
    <div className="know_body">
      <div className="container-3-country">
        <div className="left-cord-pervent">
          <p className="logi">
            Prevent failure from to impacting your reptation
          </p>
          <p className="kick">
            {" "}
            Our platform helps you build secure onboarding authentication
            experiences that retain and engage your users. We build the
            infrastructure, you can.
          </p>
          <p className="pretty-text">
            <div className="one-loto" id="unike">
              <img src={fire} alt="logo" id="fire"></img>
              <p className="zoo">Habit building essential choose habit</p>
            </div>
            <div className="one-loto">
              <img src={red} alt="logo" id="fire"></img>
              <p className="zoo">Get an overview of Habit Calendars .</p>
            </div>
            <div className="one-loto">
              <img src={life} alt="logo" id="fire"></img>
              <p className="zoo">Start building with Habitify platform</p>
            </div>
          </p>
        </div>
        <div className="right-cord-image">
          <div className="counter">
            <img src={collab} alt="logo" id="china"></img>
          </div>
        </div>
      </div>
      {/* *************************************************************************** */}
      <div className="collab_card_inner_div">
        <div className="collab_left_card">
          <img src={collab} className="collab_img" alt="logo" />
        </div>
        <div className="collab_right_card">
          <h className="collab_right_head">
            Accept payments any country in this whole universe{" "}
          </h>
          <p className="collab_right_para">
            Donec sollicitudin molestie malesda. Donec sollitudin molestie
            malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies
            ligula sed{" "}
          </p>
          <p className="star-line">
            <a>★</a>Supporting more than 119 country world
          </p>
          <p>
            <a>★</a>Open transaction with more than currencies
          </p>
          <p>
            <a>★</a>Customer Service with 79 languages
          </p>
        </div>
      </div>
      {/* **************************************************************************************************** */}
      <div className="know_card_inner_div">
        <div className="know_left_card">
          <h className="pilo">Accountability that works for you</h>
          <p className="know_card_para">
            Lorem ipsum dolor sit amet,consectetur adipiscing elit. <br></br>
            Morbi egestas Werat viverra id et aliquet.<br></br>
            vulputate egestas sollicitudin .{" "}
          </p>
          <div>
            <button type="submit" className="button">
              know about us
            </button>
          </div>
        </div>
        <div className="know_right_card">
          <img src={intro} className="intro_img" alt="logo" />
        </div>
      </div>
    </div>
  );
}
