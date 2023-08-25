import React from "react";
import "./Help.css";

export default function Help() {
  return (
    <div className="help_body">
      <div className="help_body_inner_div">
        <div className="help_left_card">
          <h className="help"> Helping teams in the world with focus</h>
          <div>
            <button type="submit" className="h_button">
              Dowmload the Theme
            </button>
          </div>
        </div>
        <div className="help_right_card">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            egestas Werat viverra id et aliquet. vulputate egestas sollicitudin
            .{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
